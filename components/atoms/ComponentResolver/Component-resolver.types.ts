import { components } from './index';

export interface ComponentResolverProps {
    contentTypeId: keyof typeof components;
    id?: string;
    data?: any;
}