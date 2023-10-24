"use client"
import React from 'react';
import { useState, Fragment } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import {Listbox, Transition} from '@headlessui/react'
import { CustomFilterProps } from '@/types';
import { updateSearhParams } from '@/utils';

const CustomFilter = ({title, options} : CustomFilterProps) => {
  const router = useRouter();

  const [selected, setSelected] = useState(options[0]);

  const handleUpdateParams = (e: {title: string, value: string}) => {
    const newPathName = updateSearhParams(title, e.value.toLowerCase())
    router.push(newPathName, {scroll: false});
  }

  return (
    <div className="w-fit cursor-pointer">
      <Listbox
      value={selected}
      onChange={(e) => {setSelected(e);
      handleUpdateParams(e);
    }}
      >
        <div className="relative w-fit z-10 cursor-pointer">
          <Listbox.Button className='custom-filter__btn cursor-pointer'>
            <span className='block truncate'>{selected.title}</span>

            <Image 
             src="/chevron-up-down.svg"
             width={20}
             height={20}
             alt='chevron up down'
             className='ml-4 object-contain'
            />
          </Listbox.Button>

          <Transition
          as={Fragment}
          leave='transition ease-in durtion-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
          >
            <Listbox.Options className='custom-filter__options'>
              {options.map((option) => (
                <Listbox.Option
                key={option.title}
                value={option}
                className={({active}) => `relative cursor-pointer select-none py-2 px-4 ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`}
                >
                  {({selected}) => (
                    <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                      {option.title}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default CustomFilter