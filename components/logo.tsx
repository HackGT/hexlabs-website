import styles from "./logo.module.css";

export default function Logo() {
  return (
    <div 
      className={styles.container}
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 39 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.9063 18.2222H7.90594L3.65818 10.6667L7.90594 3.11111H16.3971L20.6405 10.6667L14.6496 21.3333L20.6405 32H32.6312L38.6221 21.3333L32.6312 10.6667H27.6307L25.9005 13.7778H30.875L35.1227 21.3333L30.875 28.8889H22.3881L18.1447 21.3333L24.14 10.6667L18.1447 0H6.15839L0.163086 10.6667L6.15839 21.3333H11.1588L12.9063 18.2222Z"
          fill="white"
        />
      </svg>
      <span className={styles.title}>
        hexlabs
      </span>
    </div>
  );
}
