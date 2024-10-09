import { BiSolidUser } from "react-icons/bi";
import { MdOutlinePhoneIphone } from "react-icons/md";

import styles from "./Contact.module.css";

const Contact = ({ user, onDelete }) => {
  const { name, number, id } = user;
  return (
    <>
      <div className={styles.details}>
        <div className={styles.info_wrapper}>
          <p className={styles.info}>
            <BiSolidUser className={styles.icon} />
            {name}
          </p>
          <p className={styles.info}>
            <MdOutlinePhoneIphone className={styles.icon} />
            {number}
          </p>
        </div>
        <button
          onClick={() => {
            onDelete(id);
          }}
          className={styles.btn}
          type="button"
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default Contact;
