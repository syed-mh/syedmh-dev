import styles from "./index.module.scss";

type props = {
  title: string;
  category: {
    title: string;
    url: string;
  };
  duration: number;
  excerpt: string;
  url: string;
};

export const TextPostCard = (props: props) => (
  <article className={styles.textPostCard}>
    <h2>
      <a href={props.url}>{props.title}</a>
    </h2>
    <div className={styles.textPostCard__meta}>
      <span className={styles.textPostCard__category}>
        <a href={props.category.url}>{props.category.title}</a>
      </span>
      <span className={styles.textPostCard__seperator}> :: </span>
      <span className={styles.textPostCard__duration}>6 minute read</span>
    </div>
    <p className={styles.textPostCard__content}>{props.excerpt}</p>
    <a href={props.url} className={styles.textPostCard__readMore}>
      Read More
    </a>
  </article>
);
