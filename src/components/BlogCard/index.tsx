import styles from "./index.module.scss";

/* eslint @next/next/no-img-element:0 */

type props = {
  title: string;
  thumbnail: string;
  url: string;
  category: {
    title: string;
    url: string;
  };
  duration: number;
};

export const BlogCard = (props: props) => (
  <div className={styles.blogCard}>
    <figure className="backdrop">
      <img src={props.thumbnail} alt={props.title} />
    </figure>
    <div className={styles.blogCard__content}>
      <h3 className="title">{props.title}</h3>
      <div className={styles.blogCard__meta}>
        <span>
          <a href={props.category.url}>{props.category.title}</a>
        </span>
        <span> :: </span>
        <span>6 minute read</span>
      </div>
      <a href={props.url} className={styles.blogCard__readMore}>
        Read More
      </a>
    </div>
  </div>
);