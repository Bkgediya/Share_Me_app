import React , {useState, useEffect} from 'react';
import  {useParams} from 'react-router-dom';
import {feedQuery, searchQuery} from '../utils/data';
import { client } from '../client';
import MasonryLayout from './MasonryLayout';
import Spinner from './Spinner'
const Feed = () => {
  const [pins, setPins] = useState();
  const [loading, setLoading] = useState(false);
  const {categoryId} = useParams();

  useEffect(() => {
    if (categoryId) {
      setLoading(true);
      const query = searchQuery(categoryId)
      client.fetch(query)
        .then((data) => {
          setPins(data);
          setLoading(false);
        })
    } else {
      setLoading(true);
      client.fetch(feedQuery)
      .then((data) => {
        setPins(data);
        setLoading(false);
      })
    }
  }, [categoryId])

  if(loading) return <Spinner message = 'We are adding new ideas to your feed!'/>

  if (!pins?.length) return <h2 className='flex w-full justify-center items-center text-xl mt-10'>No Pins Available</h2> 
  
  return (
    <div>
      {pins && <MasonryLayout pins = {pins}/>}
    </div>
  )
}

export default Feed