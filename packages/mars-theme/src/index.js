import Theme from "./components";
import handlers from "./handlers";
import { beforeSSR, beforeCSR } from "./actions";
import {getURL} from "./libraries";

// import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";
import script from '@frontity/html2react/processors/script';
import image from "./processors/image";
import container from "./processors/container";
import cta from "./processors/cta";
import Colors from "./processors/colors";
import {squareReverse} from "./processors/decoration";

const marsTheme = {
  name: "@frontity/mars-theme",
  roots: {
    /**
     *  In Frontity, any package can add React components to the site.
     *  We use roots for that, scoped to the `theme` namespace.
     */
    theme: Theme,
  },
  state: {
    /**
     * State is where the packages store their default settings and other
     * relevant state. It is scoped to the `theme` namespace.
     */
    theme: {
      settings:{
        hubspot:{
          id: 19524753,
          forms:{
            subscriber: "19ddfa21-2c3d-4f01-81da-e2e944b2d20f",
          }
        }
      },
      colors:{
        heading: "#0065B8",
        text: "#808080",
        background:{
          body:"#FFFFFF",
          header: "#0065B8DD",
          headerTop: "transparent",
          headerMobile: "#0065B8",
        },
        primary: {
          base:"#0065B8",
          dark: "#005396",
          light: "#28AAE1",
        },
        secondary: {
          base:"#808080",
          dark:"#707070",
          light:"#FAFAFA",
        },
        gray: {
          base:"#808080",
          dark:"#707070",
          light:"#FAFAFA",
        },
        green: {
          base:"#39B449",
        },
      },
      menu: {
        main : {
          items :[
          {
            title: "Home",
            url: "/"
          },
          {
            title: "Nature",
            url: "/category/nature/"
          },
          {
            title: "Travel",
            url: "/category/travel/"
          },
          {
            title: "Japan",
            url: "/tag/japan/"
          },
          {
            title: "About Us",
            url: "/about-us/"
          }
        ]}
      },
      isMobileMenuOpen: false,
      // Whether to auto-fetch links on a page. Values can be "no" | "all" | "in-view" | "hover"
      autoPreFetch : "hover",
      modal:{
        isModalOpen:false,
        modalTitle:null,
        modalContent: ()=>{}
      }
    },
  },
  /**
   * Actions are functions that modify the state or deal with other parts of
   * Frontity like libraries.
   */
  actions: {
    theme: {
      beforeSSR,
      beforeCSR,
      toggleMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen;
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false;
      },
      menuIsOnTop: ({state}) => (scrollY) => {
        state.theme.menu.isOnTop = !scrollY?true:false;
      },
      openModal: ({ state }) => {
        state.theme.modal.isModalOpen = true;
      },
      closeModal: ({ state }) => {
        state.theme.modal.isModalOpen = false;
        state.theme.modal.modalTitle = null;
        state.theme.modal.modalBody = null;
      },
    },
  },
  libraries: {
    theme: {
      getURL
    },
    source: {
      handlers: handlers,
    },
    html2react: {
      /**
       * Add a processor to `html2react` so it processes the `<img>` tags
       * inside the content HTML. You can add your own processors too
       */
      processors: [
        image, iframe, script, container, cta, Colors, squareReverse
      ]
    }
  },
};

export default marsTheme;
