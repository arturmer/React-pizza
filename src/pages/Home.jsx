import React, { useState, useEffect } from "react"
import Categories from "../components/Categories"
import Sort from "../components/Sort"
import PizzaBlock from "../components/PizzaBlock"
import Skeleton from "../components/PizzaBlock/Skeleton"

function Home({ searchValue }) {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [categoryId, setCategoryId] = useState(0)
    const [sortType, setSortType] = useState({
        name: "популярности",
        sortProperty: "rating",
    })

    useEffect(() => {
        setIsLoading(true)

        const sortBy = sortType.sortProperty.replace("-", "")
        const order = sortType.sortProperty.includes("-") ? "asc" : "desc"
        const category = categoryId > 0 ? `category=${categoryId}` : ""
        const search = searchValue ? `&search=${searchValue}` : ""

        fetch(
            `https://63734fd4348e94729908b113.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}${search}`
        )
            .then((res) => res.json())
            .then((arr) => {
                setItems(arr)
                setIsLoading(false)
            })
        window.scrollTo(0, 0)
    }, [categoryId, sortType, searchValue])

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    value={categoryId}
                    onChangeCategory={(i) => setCategoryId(i)}
                />
                <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading
                    ? [...new Array(6)].map((_, index) => (
                          <Skeleton key={index} />
                      ))
                    : items
                          //   .filter((obj) => {
                          //       if (
                          //           obj.title
                          //               .toLowerCase()
                          //               .includes(searchValue.toLowerCase())
                          //       ) {
                          //           return true
                          //       }

                          //       return false
                          //   })
                          .map((obj) => (
                              <PizzaBlock
                                  key={obj.key}
                                  title={obj.title}
                                  price={obj.price}
                                  imageUrl={obj.imageUrl}
                                  sizes={obj.sizes}
                                  types={obj.types}
                              />
                          ))}
            </div>
        </div>
    )
}

export default Home
