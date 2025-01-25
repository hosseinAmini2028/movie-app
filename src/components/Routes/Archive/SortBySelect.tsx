"use client"
import { useFilterParams } from '@/Providers/FilterProvider'
import React from 'react'
import Select from 'react-select'

const sortOptions = [
    {
        label : "Popularity Descending",
        value : "popularity.desc"
    },
    {
        label : "Popularity Ascending",
        value : "popularity.asc"
    },
    {
        label : "Release Date Descending",
        value : "primary_release_date.desc"
    },
    {
        label : "Release Date Ascending",
        value : "primary_release_date.asc"
    },
    {
        label : "Ratings Descending",
        value : "vote_average.desc"
    },
    {
        label : "Ratings Ascending",
        value : "vote_average.asc"
    },
    {
        label : "Title (A-Z)",
        value : "title.asc"
    },
    {
        label : "Title (Z-A)",
        value : "title.desc"
    },
]
export default function SortBySelect() {
    const {filterParams : {sortBy , ...allFilterParams}, setFilterParams} = useFilterParams();
  return (
    <div className="border-t border-gray-400">
      <p className="font-light mb-6">Sort Results By</p>

      <div>
        <Select options={sortOptions} onChange={option=>setFilterParams({...allFilterParams , sortBy : option})} value={sortBy}/>
      </div>
    </div>
  )
}
