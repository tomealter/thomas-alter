import { SelectProps } from '@/source/03-components/FormItem/FormItem';

const selectWithGroups = {
  label: 'Select with groups',
  id: 'select-options',
  children: (
    <>
      <optgroup label="Group One">
        <option>Option A</option>
        <option>Option B</option>
        <option>Option C</option>
      </optgroup>
      <optgroup label="Group Two">
        <option>Option D</option>
        <option>Option E</option>
        <option disabled={true}>Disabled Option</option>
      </optgroup>
    </>
  ),
} satisfies SelectProps;

export default selectWithGroups;
