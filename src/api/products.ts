import axios from "./axios"
import { useEffect, useState } from "react"

export const useProducts = (params: any) => {
    const category = params.category;
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios
            .get("/products?category=" + category)
            .then(res => res.data)
            .then(data => {
                setData(data)
            }).finally(() => {
                setLoading(false)
            })
    }, [params.category])
    
    return {
        data: data,
        loading: loading
    }
}