import axios from "./axios"
import { useEffect, useState } from "react"

export const useProducts = () => {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios
            .get("/products?category=1&page")
            .then(res => res.data)
            .then(data => {
                setData(data)
            }).finally(() => {
                setLoading(false)
            })
    }, [])
    
    return {
        data: data,
        loading: loading
    }
}