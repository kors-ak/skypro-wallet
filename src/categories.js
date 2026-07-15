import {
  EducationIcon,
  FoodIcon,
  HousingIcon,
  JoyIcon,
  OthersIcon,
  TransportIcon,
} from './components/shared/Icons'

const categories = [
  {
    id: 1,
    api: 'food',
    name: 'Еда',
    icon: FoodIcon,
    color: '#D9B6FF',
  },
  {
    id: 2,
    api: 'transport',
    name: 'Транспорт',
    icon: TransportIcon,
    color: '#FFB53D',
  },
  {
    id: 3,
    api: 'housing',
    name: 'Жилье',
    icon: HousingIcon,
    color: '#6EE4FE',
  },
  {
    id: 4,
    api: 'joy',
    name: 'Развлечения',
    icon: JoyIcon,
    color: '#B0AEFF',
  },
  {
    id: 5,
    api: 'education',
    name: 'Образование',
    icon: EducationIcon,
    color: '#BCEC30',
  },
  {
    id: 6,
    api: 'others',
    name: 'Другое',
    icon: OthersIcon,
    color: '#FFB9B8',
  },
]

export default categories
