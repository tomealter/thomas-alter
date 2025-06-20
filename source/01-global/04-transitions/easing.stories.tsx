import { Meta, StoryObj } from '@storybook/nextjs';
import { Property } from 'csstype';
import { withGlobalWrapper } from '../../../.storybook/decorators';
import getCssVariables from '../../06-utility/storybook/getCssVariables';
import styles from './easing.module.css';

interface EasingOptions {
  [ease: string]: Property.TransitionTimingFunction;
}

const allVars = getCssVariables();

const easing = allVars.reduce((allEases, [key, value]) => {
  if (key.indexOf('--easing') === 0) {
    const ease = key.substring(9);
    allEases[ease] = value;
  }
  return allEases;
}, {} as EasingOptions);

const EasingComponent = ({
  easing: easingOptions,
}: {
  easing: EasingOptions;
}) => {
  return (
    <div className={styles.easing}>
      <div className={styles.helptext}>(Hover to demo easing)</div>
      {Object.entries(easingOptions).map(([ease, transitionTimingFunction]) => (
        <div className={styles.group} key={`easing-${ease}`}>
          <div className={styles.item}>
            <div
              className={styles.indicator}
              style={{
                transitionTimingFunction,
              }}
            ></div>
            <div className={styles.label}>{ease}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

const meta: Meta<typeof EasingComponent> = {
  title: 'Global/Easing',
  component: EasingComponent,
  decorators: [withGlobalWrapper],
  argTypes: {
    easing: {
      table: {
        disable: true,
      },
    },
  },
};

type Story = StoryObj<typeof EasingComponent>;

const Easing: Story = {
  args: {
    easing,
  },
};

export default meta;
export { Easing };
