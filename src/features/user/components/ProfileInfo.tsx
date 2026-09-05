import useUserProfile from "../hooks/useUserProfile"

interface ProfileInfoProps  {
    uid: string | undefined;
}
export default function ProfileInfo({uid}: ProfileInfoProps){
    const { loading, userData} = useUserProfile(uid);
    if(loading){
        return(
            <p>loading...</p>
        )
    }
    if(!userData){
        return(
            <p>User profile not found</p>
        )
    }
    return(
    <div className="flex flex-col gap-2">
        <h2>Profile information</h2>
        <div className="space-y-1 mt-4">
            <div className="flex gap-2">
                <span>First Name</span>
                <p>{userData.firstName}</p>
            </div>
               <div className="flex gap-2">
                <span>Last Name</span>
                <p>{userData.lastName}</p>
            </div>
               <div className="flex gap-2">
                <span>Email address</span>
                <p>{userData.email}</p>
            </div>
        </div>
    </div>
    )
}