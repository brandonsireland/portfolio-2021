import { SrcSetProps } from "../../molecules/ResponsiveMedia/responsive-media.types";

export interface PreviousAndNextArticleProps {
    id?: string;
    currentArticleData?: SrcSetProps;
    currentArticlePublishDate?: string;
}

export interface articleDataProps {
    nextArticleSlug: string;
    nextArticleTitle: string;
    nextArticleBackgroundImage: SrcSetProps
    previousArticleSlug: string;
    previousArticleTitle: string;
    previousArticleBackgroundImage: SrcSetProps
}
