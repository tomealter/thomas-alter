import dynamic from 'next/dynamic';

const Icons = {
  AngleDoubleLeft: dynamic(() => import('./AngleDoubleLeft'), {
    loading: () => <svg className="icon"></svg>,
  }),
  AngleDoubleRight: dynamic(() => import('./AngleDoubleRight'), {
    loading: () => <svg className="icon"></svg>,
  }),
  AngleDown: dynamic(() => import('./AngleDown'), {
    loading: () => <svg className="icon"></svg>,
  }),
  AngleLeft: dynamic(() => import('./AngleLeft'), {
    loading: () => <svg className="icon"></svg>,
  }),
  AngleRight: dynamic(() => import('./AngleRight'), {
    loading: () => <svg className="icon"></svg>,
  }),
  AngleUp: dynamic(() => import('./AngleUp'), {
    loading: () => <svg className="icon"></svg>,
  }),
  ArrowAngled: dynamic(() => import('./ArrowAngled'), {
    loading: () => <svg className="icon"></svg>,
  }),
  Close: dynamic(() => import('./Close'), {
    loading: () => <svg className="icon"></svg>,
  }),
  Codepen: dynamic(() => import('./Codepen'), {
    loading: () => <svg className="icon"></svg>,
  }),
  Email: dynamic(() => import('./Email'), {
    loading: () => <svg className="icon"></svg>,
  }),
  Facebook: dynamic(() => import('./Facebook'), {
    loading: () => <svg className="icon"></svg>,
  }),
  Github: dynamic(() => import('./Github'), {
    loading: () => <svg className="icon"></svg>,
  }),
  Linkedin: dynamic(() => import('./Linkedin'), {
    loading: () => <svg className="icon"></svg>,
  }),
  RoundedArrowDown: dynamic(() => import('./RoundedArrowDown'), {
    loading: () => <svg className="icon"></svg>,
  }),
  Rss: dynamic(() => import('./Rss'), {
    loading: () => <svg className="icon"></svg>,
  }),
  TaBackground: dynamic(() => import('./TaBackground'), {
    loading: () => <svg className="icon"></svg>,
  }),
  ThomasAlterLogo: dynamic(() => import('./ThomasAlterLogo'), {
    loading: () => <svg className="icon"></svg>,
  }),
  ThreeDots: dynamic(() => import('./ThreeDots'), {
    loading: () => <svg className="icon"></svg>,
  }),
  Twitter: dynamic(() => import('./Twitter'), {
    loading: () => <svg className="icon"></svg>,
  }),
};

export default Icons;
