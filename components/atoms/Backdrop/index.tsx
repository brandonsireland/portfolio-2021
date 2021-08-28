import React, { Fragment } from 'react';
import cc from 'classcat';

// Components
import BaseVideo from '../BaseVideo';
// import ResponsiveImage from '../ResponsiveImage';

// Types
import { BackdropProps } from './backdrop.types';

// Styles
import css from './backdrop.module.scss';

const Backdrop: React.FC<BackdropProps> = ({
    backdrop,
    backgroundColor,
    backdropClass,
    isStatic = false,
    fit = 'crop',
    f = 'center',
    fill = false,
    video = {},
    type = 'image',
    backdropOpacity = 1,
    query = '',
    children,
}) => {
    return (
        <Fragment>
            <div className={cc([css.wrap, { [css.fill]: fill }])}>
                <div className={css.backdropContainer}>
                    <div
                        className={cc([
                            css.backdrop,
                            backdropClass,
                            { [css.isStatic]: isStatic },
                        ])}
                        style={{
                            backgroundColor: backgroundColor,
                            opacity: backdropOpacity,
                        }}
                    >
                        {typeof backdrop === 'string' && (
                            <picture>
                                <source
                                    src={`${backdrop}${query}${query !== '' ? '&' : '?'}fm=webp`}
                                    type='image/webp'
                                ></source>
                                <img className={css.img} src={`${backdrop}${query}`} />
                            </picture>
                        )}

                        {/* {type === 'image' || type === 'both' && backdrop?.default?.url && (
                        <ResponsiveImage
                        srcSet={backdrop}
                        query={`&h=${backdrop?.default?.height || 600}&fit=${fit}&f=${f}`}
                        />
                    )} */}

                        {type !== 'image' && (
                            <BaseVideo
                                className={css.video}
                                autoPlay={true}
                                loop={true}
                                muted={true}
                                playsInline={true}
                                url={video.url}
                                poster={
                                    backdrop?.default?.url
                                        ? backdrop?.default?.url
                                        : undefined
                                }
                            />
                        )}
                    </div>
                </div>

                {children}
            </div>
        </Fragment>
    );
};

export default Backdrop;


{/* <template>
  <div :is="as" ref="backdrop" :class="[$style.wrap, fill && $style.fill]">
    <div :class="$style.backdropContainer">
      <div
        v-if="eager || $isIntersecting"
        :class="[$style.backdrop, backdropClass, isStatic && $style.isStatic]"
        :style="{
          backgroundColor: backgroundColor,
          opacity: eager || isIntersecting ? backdropOpacity : 0,
        }"
      >
        <picture v-if="computedIsBasic">
          <source
            v-if="backdrop.includes('ctfassets')"
            :srcset="
              backdrop + `${backdrop.includes('?') ? '&' : '?'}` + `fm=webp`
            "
            type="image/webp"
          />
          <img :class="$style.img" :src="backdrop" alt="" />
        </picture>

        <responsive-image
          v-if="(type === 'image' || type === 'both') && computedDefault"
          :srcset="backdrop"
          :query="`&h=${computedMinHeight}&fit=${fit}&f=${f}`"
        />

        <template v-if="type !== 'image'">
          <video
            v-if="eager || ($isIntersecting && isWindowLoaded)"
            :class="$style.video"
            autoplay="autoplay"
            loop="loop"
            muted="muted"
            playsinline="playsinline"
            webkit-playsinline="webkit-playsinline"
            x5-playsinline="x5-playsinline"
            :poster="computedDefault ? computedDefault : undefined"
          >
            <source :src="video.url" type="video/mp4" />
          </video>
        </template>
      </div>
    </div>

    <slot :isIntersecting="isIntersecting" />
  </div>
</template>

<script>
import observeIntersection from '~/mixins/observeIntersection.mixins';
import ResponsiveImage from '~/components/atoms/ResponsiveImage';

export default {
  name: 'WithBackdrop',
  components: {
    ResponsiveImage,
  },
  mixins: [observeIntersection('backdrop')],
  data() {
    return {
      viewportUpdated: false,
      isIntersecting: false,
    };
  },
  computed: {
    computedIsBasic() {
      return typeof this.backdrop === 'string';
    },
    computedDefault() {
      return this.backdrop?.default?.url;
    },
    computedMinHeight() {
      return this.backdrop?.default?.height || 600;
    },
    isWindowLoaded() {
      return this.$store.state.isWindowLoaded;
    },
  },
  watch: {
    $isIntersecting(isIntersecting) {
      if (isIntersecting) {
        this.$emit('intersecting');
        this.isIntersecting = true;
        this.$destroyObserver();
      }
    },
  },
};
</script> */}
