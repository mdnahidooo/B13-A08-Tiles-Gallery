"use client"
import { authClient } from '@/lib/auth-client';
import { Avatar, Card } from '@heroui/react';
import React from 'react';

const MyProfilePage = () => {
    const { data: session } = authClient.useSession();
    const userInfo = session?.user;
    console.log(userInfo);
    return (
        <div>
            <Card className='max-w-96 mx-auto flex flex-col items-center my-10'>
                <Avatar className='h-20 w-20'>
                    <Avatar.Image
                        alt={userInfo?.name}
                        src={userInfo?.image}
                        referrerPolicy="no-referrer"
                    />
                    <Avatar.Fallback>{userInfo?.name.charAt(0)}</Avatar.Fallback>
                </Avatar>

                <h2 className='text-xl font-bold'>{userInfo?.name}</h2>
                <p className='text-muted'>{ userInfo?.email}</p>
            </Card>
        </div>
    );
};

export default MyProfilePage;