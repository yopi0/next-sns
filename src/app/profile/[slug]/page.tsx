'use client';

import apiClient from '@/app/lib/apiClient';
import { PostType, Profile, UserType } from '@/app/types';
import { GetServerSideProps } from 'next';
import React, { useEffect, useState } from 'react'
import { isContext } from 'vm';
import { useSearchParams } from 'next/navigation';
import { useParams } from 'next/navigation';
import { AxiosResponse } from 'axios';

const page = () => {
    const [profile, setProfile] = useState<{id: Number, bio:string, profileImageUrl:string, userId: number, user: UserType}|null>(null);

    const [user, setUser] = useState<PostType[]>([]);
    const {slug} = useParams();

    useEffect(() => {
      console.log('start');
      console.log(slug);
      const fetchData = async () =>{
        try{
          const hoge = await apiClient.get(`/users/profile/${slug}`);
          const fuga = await apiClient.get(`/posts/${slug}`);
          const data = await hoge.data;
          const data2 = await fuga.data;
          console.log(data);
          console.log(data.bio);
          setProfile(data);
          setUser(data2);
        }catch(error){
          console.log(error);
        }
      };
      fetchData();
    }, [slug]);

    console.log(profile);
  return (
    <div className="container mx-auto px-4 py-8">
  <div className="w-full max-w-xl mx-auto">
    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
      <div className="flex items-center">
        <img className="w-20 h-20 rounded-full mr-4" alt="User Avatar" src={profile?.profileImageUrl} />
        <div>
          <h2 className="text-2xl font-semibold mb-1">{profile?.user.username}</h2>
          <p className="text-gray-600">{profile?.bio}</p>
        </div>
      </div>
    </div>
    {user?.map((post: PostType) =>
          <div className="bg-white shadow-md rounded p-4 mb-4"  key={post.id}>
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <img className="w-10 h-10 rounded-full mr-2" alt="User Avatar" src={profile?.profileImageUrl}/>
              <div>
                <h2 className="font-semibold text-md">{post.author.username}</h2>
                <p className="text-gray-500 text-sm">{new Date(post.createdAt).toLocaleString()}</p>
              </div>
            </div>
            <p className="text-gray-700">{post.content}</p>
          </div>
        </div>
    )}

  </div>
</div>
  )
}

export default page
