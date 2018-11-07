import { CardItem } from '../models/dashboard-card-items.model';

export const CARDITEMS: CardItem[] = [
  {
    itemValue: 2.696,
    title: 'Product Deliveries',
    picture: '../../../../assets/images/icon_delivery.svg'
  },
  {
    itemValue: 2.65,
    title: 'Inventory Turnover',
    picture: '../../../../assets/images/icon_deal.svg',
    currency: true
  },
  {
    itemValue: 60,
    title: 'New Projects',
    picture: '../../../../assets/images/icon_projects.svg',
    isProject: true
  },
  {
    itemValue: 396,
    title: 'Client Meetings',
    picture: '../../../../assets/images/icon_meeting.svg'
  }

];
