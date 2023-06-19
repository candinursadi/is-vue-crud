import { ref } from "vue"
import axios from "axios"
import { useRouter } from "vue-router"

export default function useTransactions() {
    const transactions = ref([])
    const transaction = ref([])
    const errors = ref({})
    const router = useRouter()

    const page = ref(1)
    const pageCount = ref(null)

    axios.defaults.baseURL = import.meta.env.VITE_API_URL

    const getTransactions = async() => {
        const response = await axios.get("transactions?page=" + page.value)
        pageCount.value = response.data.meta.last_page
        transactions.value = response.data.data
    }

    const getTransaction = async(id) => {
        const response = await axios.get("transactions/" + id)
        transaction.value = response.data.data
    }

    const storeTransaction = async(data) => {
        try {
            await axios.post("transactions", data)
            await router.push({name: "TransactionIndex"})
        } catch (error) {
            if(error.response.status === 422){
                errors.value = error.response.data.errors
            }
        }
    }

    const updateTransaction = async(id) => {
        try {
            await axios.put("transactions/" + id, transaction.value)
            await router.push({name: "TransactionIndex"})
        } catch (error) {
            if(error.response.status === 422){
                errors.value = error.response.data.errors
            }
        }
    }

    const destroyTransaction = async(id) => {
        if(!confirm("Are you sure?")){
            return
        }
        await axios.delete("transactions/" + id).then(response => {
            alert(response.data.message)
        })
        await getTransactions()
    }

    const getTransactionsSummary = async() => {
        const response = await axios.get("transactions-summary")
        transactions.value = response.data.data
    }

    return {
        page,
        pageCount,
        transaction,
        transactions,
        errors,
        getTransactions,
        getTransaction,
        storeTransaction,
        updateTransaction,
        destroyTransaction,
        getTransactionsSummary
    }
}