import { Meta, StoryObj } from '@storybook/nextjs';
import { Property } from 'csstype';
import { useEffect, useState } from 'react';
import { withGlobalWrapper } from '../../../.storybook/decorators';
import getCssVariables from '../../06-utility/storybook/getCssVariables';
import styles from './letterspacing.module.css';

const meta: Meta = {
  title: 'Global/Typography/Letterspacing',
  decorators: [withGlobalWrapper],
};

interface FontOptions {
  [name: string]: Property.FontFamily;
}

interface LetterspacingOptions {
  [name: string]: Property.LetterSpacing;
}

const Letterspacing: StoryObj = {
  render: function Render() {
    const [fonts, setFonts] = useState<FontOptions | undefined>(undefined);
    const [letterSpacings, setLetterSpacings] = useState<
      LetterspacingOptions | undefined
    >(undefined);

    useEffect(() => {
      const allVars = getCssVariables();

      const fontOptions = allVars.reduce((allFonts, [key, value]) => {
        if (key.indexOf('--font-family') === 0) {
          const name =
            key.substring(14).charAt(0).toUpperCase() +
            key.substring(14).slice(1);
          allFonts[name] = value;
        }
        return allFonts;
      }, {} as FontOptions);
      setFonts(fontOptions);

      const letterspacingOptions = allVars.reduce(
        (allLetterSpacings, [key, value]) => {
          if (key.indexOf('--letterspacing') === 0) {
            const name = key.substring(16);
            allLetterSpacings[name] = value;
          }
          return allLetterSpacings;
        },
        {} as LetterspacingOptions,
      );
      setLetterSpacings(letterspacingOptions);
    }, []);

    return (
      <>
        {fonts &&
          Object.entries(fonts)
            .sort((fontA, fontB) => {
              if (fontA[0].toLowerCase().includes('primary')) {
                return -1;
              }
              if (fontB[0].toLowerCase().includes('primary')) {
                return 1;
              }
              if (fontA[0].toLowerCase().includes('secondary')) {
                return -1;
              }
              if (fontB[0].toLowerCase().includes('secondary')) {
                return 1;
              }
              return 0;
            })
            .map(([name, fontFamily]) => (
              <div className={styles['line-height']} key={name}>
                <h2 className={styles.heading}>{name}</h2>
                <div style={{ fontFamily }}>
                  {letterSpacings &&
                    Object.entries(letterSpacings).map(
                      ([letterSpacingName, letterSpacing]) => (
                        <div className={styles.row} key={letterSpacingName}>
                          <div className={styles.label}>
                            {letterSpacingName}
                          </div>
                          <div
                            className={styles.preview}
                            style={{ letterSpacing }}
                          >
                            The letterspacing for this text is{' '}
                            <strong>{letterSpacing}</strong>.
                          </div>
                        </div>
                      ),
                    )}
                </div>
              </div>
            ))}
      </>
    );
  },
};

export default meta;
export { Letterspacing };
