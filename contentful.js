const contentful = require('contentful');
const isArray = require('lodash/isArray');
const isString = require('lodash/isString');
const isObject = require('lodash/isObject');

const getIdAndFields = ({
    sys: {
        id = null,
        contentType: { sys: { id: contentTypeId = null } = {} } = {},
        locale,
    } = {},
    fields = {},
}) => {
    return {
        id,
        contentTypeId,
        ...fields,
    };
};

const getImageFields = image => {
    if (!image) return undefined;

    const {
        file: {
            url,
            details: {
                size = '',
                image: { width = '', height = '' } = {},
            } = {},
            fileName = '',
            contentType = '',
        } = {},
        ...data
    } = image;

    return {
        url,
        size,
        width,
        height,
        fileName,
        contentType,
        ...data,
    };
};

const getContentData = content => {
    if (!content) return undefined;

    // Ignore strings
    if (isString(content)) return content;

    const contentData = getIdAndFields(content);

    // If we're working with a contentful image object parse it.
    if (contentData.file) {
        return getImageFields(contentData);
    }

    // If we're dealing with any other object recursively resolve all it's values.
    return Object.keys(contentData).reduce((acc, cur) => {
        const curContentData = contentData[cur];

        if (isArray(curContentData)) {
            return {
                ...acc,
                [cur]: curContentData.map(getContentData),
            };
        }

        if (isObject(curContentData)) {
            return {
                ...acc,
                [cur]: getContentData(curContentData),
            };
        }

        return {
            ...acc,
            [cur]: curContentData,
        };
    }, {});
};

exports.getIdAndFields = getIdAndFields;
exports.getImageFields = getImageFields;
exports.getContentData = getContentData;

exports.client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE,
    environment: process.env.CONTENTFUL_ENV,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    host: process.env.CONTENTFUL_HOST,
});
