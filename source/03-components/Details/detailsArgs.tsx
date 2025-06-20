import { DetailsProps } from '@/source/03-components/Details/Details';

const detailsArgs = {
  detailsSummary: 'Details summary',
  detailsDescription: 'Details description',
  modifierClasses: '',
  isRequired: false,
  children: <p>Details content</p>,
} satisfies DetailsProps;

export default detailsArgs;
