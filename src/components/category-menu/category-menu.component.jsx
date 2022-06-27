import DirectoryItem from "../directory-item/directory-item.component";

import { CategoryMenuContainer } from './category-menu.styles';

const CategoryMenu = ({ categories }) => {
  return (
    <CategoryMenuContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </CategoryMenuContainer>
  );
}

export default CategoryMenu;
