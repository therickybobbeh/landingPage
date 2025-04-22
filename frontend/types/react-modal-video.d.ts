declare module 'react-modal-video' {
  import { Component } from 'react';

  interface ModalVideoProps {
    channel?: string;
    isOpen?: boolean;
    videoId?: string;
    onClose?: () => void;
    youtube?: {
      autoplay?: number;
      cc_load_policy?: number;
      color?: string;
      controls?: number;
      disablekb?: number;
      enablejsapi?: number;
      end?: number;
      fs?: number;
      h1?: string;
      iv_load_policy?: number;
      list?: string;
      listType?: string;
      loop?: number;
      modestbranding?: number;
      origin?: string;
      playlist?: string;
      playsinline?: number;
      rel?: number;
      showinfo?: number;
      start?: number;
      wmode?: string;
    };
    ratio?: string;
    allowFullScreen?: boolean;
    animationSpeed?: number;
    classNames?: {
      modalVideo?: string;
      modalVideoClose?: string;
      modalVideoBody?: string;
      modalVideoInner?: string;
      modalVideoIframeWrap?: string;
      modalVideoCloseBtn?: string;
    };
    aria?: {
      openMessage?: string;
      dismissBtnMessage?: string;
    };
  }

  export default class ModalVideo extends Component<ModalVideoProps> {}
}