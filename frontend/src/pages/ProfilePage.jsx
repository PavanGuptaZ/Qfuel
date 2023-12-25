import { useGetUser } from "../hooks";
import styles from "../css/ProfilePage.module.css";
import { FaUser } from "react-icons/fa";
import { QuotesComponet } from "../components/QuotesComponet";
import { LoginAndRegister } from "./LoginAndRegister";

export const ProfilePage = () => {
    const user = useGetUser()
    if (!user) {
        return <LoginAndRegister type={'login'} />
    }
    return (
        <div className={styles.ProfilePageFullBox}>
            <div className={styles.ProfilePicBox}>
                <FaUser />
            </div>
            <div className={styles.UserName}>{user.name}</div>
            <div className={styles.UserEmail}>{user.email}</div>
            <div className={styles.LikedList}>
                {user.quotes.length > 0 ?
                    user.quotes.map((ele) => {
                        return <QuotesComponet key={ele._id} data={ele} />
                    })
                    :
                    <div>Nothing to display</div>
                }

            </div>
        </div>
    )
}
