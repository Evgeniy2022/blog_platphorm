import { FC } from "react";
import styles from "./PaginationPage.module.css";
import { IArrayPagination } from "../../types";

interface PaginationPageProps {
  page: number;
  setPage: (arg: number) => void;
  arrayPagination: IArrayPagination[];
}

export const PaginationPage: FC<PaginationPageProps> = ({
  page,
  setPage,
  arrayPagination,
}) => {

  
  // изменение номера page
  function handleClick(i: number) {
    setPage(i - 1);
  }

  return (
    <div
      onClick={() => handleClick(page)}
      className={
        arrayPagination[page].active
          ? `${styles.page} ${styles.active}`
          : styles.page
      }
    >
      {page}
    </div>
  );
};
