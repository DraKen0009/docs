import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  careSideBar: [
  {

      type: 'category',
      label: 'Care',
      items: [{
          type: 'autogenerated',
          dirName: 'care',
        }],
    },
  {

      type: 'category',
      label: 'Ayushma',
      items: [{
          type: 'autogenerated',
          dirName: 'ayushma',
        }],
    },

  ],

};

export default sidebars;
