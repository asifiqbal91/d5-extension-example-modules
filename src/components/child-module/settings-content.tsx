// External dependencies.
import React, { ReactElement } from 'react';

// WordPress dependencies
import { __ } from '@wordpress/i18n';

// Divi dependencies.
import {
  BackgroundGroup,
  FieldContainer,
  LinkGroup,
  SettingsProps,
} from '@divi/module';
import { GroupContainer } from '@divi/modal';
import {
  IconPickerContainer,
  RichTextContainer,
  TextContainer,
} from '@divi/field-library';
import { mergeAttrs } from '@divi/module-utils';

// Local dependencies.
import {ChildModuleAttrs} from "./types";
import {ParentModuleAttrs} from "../parent-module/types";

export const SettingsContent = ({
    defaultSettingsAttrs,
  parentAttrs,
  }: SettingsProps<ChildModuleAttrs, ParentModuleAttrs>): ReactElement => {
  const defaultIconAttrs = mergeAttrs({
    defaultAttrs: defaultSettingsAttrs?.icon,
    attrs:        parentAttrs?.asMutable({ deep: true })?.icon,
  });

  return (
    <React.Fragment>
      <GroupContainer
        id="mainContent"
        title={__('Text', 'd5-extension-example-modules')}
      >
        <FieldContainer
          attrName="title.innerContent"
          label={__('Title', 'd5-extension-example-modules')}
          description={__('Input your value to action title here.', 'd5-extension-example-modules')}
          sticky={false}
        >
          <TextContainer />
        </FieldContainer>
        <FieldContainer
          attrName="content.innerContent"
          label={__('Content', 'd5-extension-example-modules')}
          description={__('Input the main text content for your module here.', 'd5-extension-example-modules')}
          sticky={false}
        >
          <RichTextContainer />
        </FieldContainer>
      </GroupContainer>
      <GroupContainer
        id="icon"
        title={__('Icon', 'd5-extension-example-modules')}
      >
        <FieldContainer
          attrName="icon.decoration.icon"
          label={__('Icon', 'd5-extension-example-modules')}
          description={__('Pick an Icon', 'd5-extension-example-modules')}
          sticky={false}
          defaultAttr={defaultIconAttrs}
        >
          <IconPickerContainer />
        </FieldContainer>
      </GroupContainer>
      <LinkGroup />
      <BackgroundGroup
        defaultGroupAttr={defaultSettingsAttrs?.module?.decoration?.background?.asMutable({ deep: true }) ?? {}}
      />
    </React.Fragment>
  );
}
