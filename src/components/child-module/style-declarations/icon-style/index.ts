import {
  isFaIcon,
  processFontIcon,
} from '@divi/icon-library';
import { DeclarationFunctionProps } from '@divi/module';
import { StyleDeclarations } from '@divi/style-library';
import { IconAttr } from '@divi/types';

/**
 * Style declaration for icon.
 *
 * @since ??
 *
 * @param {DeclarationFunctionProps<IconAttr>} param0 Style declaration params.
 *
 * @returns {string}
 */
export const iconStyleDeclaration = ({
  attrValue,
}: DeclarationFunctionProps<IconAttr>): string => {
  const {
    color,
    size,
  } = attrValue;

  const declarations = new StyleDeclarations({
    returnType: 'string',
    important: {
      'font-family': true,
      content: true,
    },
  });

  const fontIcon = processFontIcon(attrValue);

  if (fontIcon) {
    const fontFamily = isFaIcon(attrValue) ? 'FontAwesome' : 'ETmodules';
    declarations.add('content', `'${fontIcon}'`);
    declarations.add('font-family', `"${fontFamily}"`);
  }

  if (color) {
    declarations.add('color', color);
  }

  if (size) {
    declarations.add('font-size', size);
  }
  return declarations.value as string;
};
