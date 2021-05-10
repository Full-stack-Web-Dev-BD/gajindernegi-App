import { adminRoot } from './defaultValues';

const data = [
  {
    id: 'My Asset ',
    icon: 'simple-icon-layers',
    label: 'Asset Manager',
    to: `${adminRoot}/asset-manager`,
  },
  {
    id: 'My Kit ',
    icon: 'simple-icon-star',
    label: 'Brand Kit ',
    to: `${adminRoot}/brand-kit`,
  },
  {
    id: 'My Projects',
    icon: 'simple-icon-organization',
    label: 'My Projects',
    to: `${adminRoot}/my-project`,
  },
  {
    id: 'Settings',
    icon: 'iconsminds-gears',
    label: 'Settings',
    to: `${adminRoot}/setting`,
  },
];
export default data;
