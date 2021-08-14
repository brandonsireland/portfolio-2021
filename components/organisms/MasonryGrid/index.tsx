import React from 'react';

// Components
import BasePicture from '../../atoms/BasePicture';

// Types
import { BasePictureProps } from '../../atoms/BasePicture/base-picture.types';

export interface MasonryGridProps {
    id: string;
    masonryPhotos: BasePictureProps[];
}

// Styles
import css from './masonry-grid.module.scss';

const MasonryGrid: React.FC<MasonryGridProps> = ({
    id = '',
    masonryPhotos = [],
}) => {
    return (
        <section id={id}>
            <div className={css.container}>
                {masonryPhotos.length > 0 && (
                    <div className={css.inner}>
                        {masonryPhotos.map((photo) => (
                            <div
                                key={photo.id}
                                className={css.item}
                            >
                                <BasePicture src={photo.url} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default MasonryGrid;
