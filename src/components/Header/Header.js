import React from "react";

import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
            <span>D RESUME BUILDER</span>
          
        </p>
        <p className={styles.heading}>
          Create Your Own Resume <span>It's free</span>
        </p>
      </div>
      <div className={styles.right}>
        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY_BtMnDnakAR88Tpxq5ppQ8gEAv-n3pulBzUuDtm6pS_PO8t_cMMXS4JcGNnplJ1kVPU&usqp=CAU"} alt="Resume" />
      </div>
    </div>
  );
}

export default Header;