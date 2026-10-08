import FoodItem from "./foodItem";
import OuterContainer from "./layout/OuterContainer";
import InnerContainer from "./layout/InnerContainer";
import styles from "./FoodList.module.css";

export default function FoodList({ food }) {
  return (
    <OuterContainer>
      <InnerContainer>
        <h1 className={styles.heading}>Food List</h1>

        <div className={styles.foodGrid}>
          {food.map((item) => (
            <FoodItem key={item.id} food={item} />
          ))}
        </div>
      </InnerContainer>
    </OuterContainer>
  );
}
