import { useQuery, useQueryClient } from '@tanstack/react-query';
import { QuotesComponet } from '../components/QuotesComponet.jsx';
import { LoadingComponent } from '../components/LoadingComponent.jsx';
import styles from '../css/UserPage.module.css'
import { fetchQuotes } from '../api/quotes/fetchQuotes.js';
import { LoginAndRegister } from './LoginAndRegister.jsx';
import { useGetUser } from '../hooks/index.js';

export const UserPage = () => {
    const user = useGetUser()
    const queryClient = useQueryClient()

    const QuotesQuery = useQuery({
        queryKey: ['Quotes'],
        queryFn: () => fetchQuotes(),
        staleTime: Infinity,
        enabled: !!user
    })

    if (!user) {
        return <LoginAndRegister type={'login'} />
    }

    const handelLoad = () => {
        queryClient.invalidateQueries(['Quotes'])
    }

    return (
        <div className={styles.UserPageFullBox}>
            <button onClick={handelLoad} className={styles.LoadAgainBTN}>Load Again</button>
            {
                (QuotesQuery.isLoading || QuotesQuery.isFetching) ?
                    <LoadingComponent />
                    :
                    QuotesQuery.data.map((ele) => {
                        return <QuotesComponet key={ele._id} data={ele} />
                    })
            }
        </div>
    )
}
