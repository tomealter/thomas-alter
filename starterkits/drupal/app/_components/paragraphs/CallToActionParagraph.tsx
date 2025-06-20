import CallToAction from '@/source/03-components/CallToAction/CallToAction';
import { FragmentType, getFragmentData, graphql } from '@/types/__generated__';

const CallToActionParagraphFragment = graphql(`
  fragment CallToActionParagraphFragment on ParagraphCallToAction {
    id
    ctaTitle: title
    ctaContent: wysiwyg {
      processed
    }
    ctaLink: link {
      title
      url
    }
  }
`);

function CallToActionParagraph({
  entity,
}: {
  entity: FragmentType<typeof CallToActionParagraphFragment>;
}) {
  const paragraph = getFragmentData(CallToActionParagraphFragment, entity);
  return (
    <CallToAction
      heading={paragraph.ctaTitle}
      body={paragraph.ctaContent}
      button={{
        label: paragraph.ctaLink?.title,
        href: paragraph.ctaLink?.url,
      }}
    />
  );
}

export default CallToActionParagraph;
export { CallToActionParagraphFragment };
