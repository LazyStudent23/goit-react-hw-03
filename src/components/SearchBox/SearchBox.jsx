import { ImSearch } from "react-icons/im";

import styles from "./SearchBox.module.css";

const SearchBox = ({ value, onSearch }) => {
  return (
    <div className={styles.searchbox_wrapper}>
      <label className={styles.label}>
        <span className={styles.label_title}>
          Find contacts by name or number
        </span>

        <input
          onChange={(event) => {
            onSearch(event.target.value);
          }}
          className={styles.input}
          type="text"
          value={value}
          placeholder="Start typing..."
        />

        <ImSearch className={styles.ico} />
      </label>
    </div>
  );
};

export default SearchBox;
