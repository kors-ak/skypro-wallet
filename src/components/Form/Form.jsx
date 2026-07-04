import Button from '../Button/Button'
import Category from '../Category/Category'
import { SInput } from '../Input/Input.styled'
import { SGroup, SContent, SForm, STitle, SCategories } from './Form.styled'
import { categories } from '../../data'

export const Form = () => {
  return (
    <SForm>
      <SContent>
        <STitle>Новый расход</STitle>
        <SGroup>
          <h3>Описание</h3>
          <SInput
            type="text"
            placeholder="Введите описание"
            name="description"
          />
        </SGroup>
        <SGroup>
          <h3>Категория</h3>
          <SCategories>
            {categories.map((cat) => (
              <Category category={cat} key={cat.api} />
            ))}
          </SCategories>
        </SGroup>
        <SGroup>
          <h3>Дата</h3>
          <SInput
            type="date"
            placeholder="Выберите дату"
            name="date"
            id="date"
          />
        </SGroup>
        <SGroup>
          <h3>Сумма</h3>
          <SInput
            type="number"
            placeholder="Введите сумму"
            name="sum"
            id="sum"
          />
        </SGroup>
        <Button>Добавить новый расход</Button>
      </SContent>
    </SForm>
  )
}

export default Form
