import styles from '../css/QuotesComponet.module.css';
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import PropTypes from 'prop-types'
import { useGetUser, useUserFetching } from '../hooks';
import { fetchLikeDislike } from '../api/quotes/fetchLikeDislike';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { AiOutlineLoading } from "react-icons/ai";

export const QuotesComponet = ({ data }) => {
    const user = useGetUser()
    const userFetching = useUserFetching()
    const queryClient = useQueryClient()
    const [like, setLike] = useState(user.quotes.includes(data))

    const LikesMutation = useMutation({
        mutationKey: ['like/dislike'],
        mutationFn: () => fetchLikeDislike(like, data),
        onSuccess: (data) => {
            if (data.success) {
                setLike(!like)
                queryClient.invalidateQueries({ queryKey: ['refresh'] })
            } else {
                console.log(false)
            }
        }
    })
    const handelBTN = () => {
        LikesMutation.mutate()
    }

    return (
        <div className={styles.QuotesComponet}>
            <div className={styles.Author}>{data.Author}</div>
            <div className={styles.Content}>{data.content}</div>
            <div className={styles.Controls}>
                <button className={styles.LikeBTN} onClick={handelBTN} disabled={LikesMutation.isPending || userFetching}>
                    {LikesMutation.isPending ?
                        <div className={styles.loading}> <AiOutlineLoading className={styles.loadingIcon} /></div>
                        :
                        like ?
                            <FaHeart className={styles.likedHeart} />
                            :
                            <FaRegHeart className={styles.unlikedHeart} />

                    }
                </button>

            </div>
        </div>
    )
}

QuotesComponet.propTypes = {
    data: PropTypes.object.isRequired
}