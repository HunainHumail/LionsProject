import {
  DashboardScreen,
  ClubInformation,
  MemberDetails,
  Service,
  BusinessCorner,
  Birthdays,
  Anniversaries,
  BloodDoner,
  Notices,
  Profile
} from '../components';

// export const HomeStack = [
//   {
//     name: 'DashboardScreen',
//     component: DashboardScreen,
//     key: 'DashboardScreen',
//   },
//   {
//     name: 'ClubInformation',
//     component: ClubInformation,
//     key: 'ClubInformation',
//   },
//   {
//     name: 'MemberDetails',
//     component: MemberDetails,
//     key: 'MemberDetails',
//   },
//   {
//     name: 'Service',
//     component: Service,
//     key: 'Service',
//   },
//   {
//     name: 'BusinessCorner',
//     component: BusinessCorner,
//     key: 'BusinessCorner',
//   },
//   {
//     name: 'Birthdays',
//     component: Birthdays,
//     key: 'Birthdays',
//   },
//   {
//     name: 'Anniversaries',
//     component: Anniversaries,
//     key: 'Anniversaries',
//   },
//   {
//     name: 'BloodDoner',
//     component: BloodDoner,
//     key: 'BloodDoner',
//   },
//   {
//     name: 'Notices',
//     component: Notices,
//     key: 'Notices',
//   },
//   {
//     name: 'Profile',
//     component: Profile,
//     key: 'Profile',
//   },
// ];


const HomeStack = {
  DashboardScreen: {
    screen: DashboardScreen,
  },
  ClubInformation: {
    screen: ClubInformation,
  },
  MemberDetails: {
    screen: MemberDetails,
  },
  Service: {
    screen: Service,
  },
  BusinessCorner: {
    screen: BusinessCorner,
  },
  Birthdays: {
    screen: Birthdays,
  },
  Anniversaries: {
    screen: Anniversaries,
  },
  BloodDoner: {
    screen: BloodDoner,
  },
  Notices: {
    screen: Notices,
  },
  Profile: {
    screen: Profile,
  },
};

export default HomeStack;
