import { useEffect, useRef, useState } from 'react'
import LoadingSpinner from '@icons/LoadingSpinner'
import TagsInput from 'react-tagsinput'
import axios from 'axios'

import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useForm } from 'react-hook-form'
import { UserFinalSetup, userFinalSetup } from './schema'
import { zodResolver } from '@hookform/resolvers/zod'
import useUserFinalSetup from '@hooks/api/post/useUserFinalSetup'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@components/ui/form'
import { Input } from '@components/ui/input'
import { Button } from '@components/ui/button'

const UserFinalSetupForm = () => {
  const inputFileRef = useRef<HTMLInputElement | null>(null)
  const [imgFile, setImgFile] = useState<File | undefined>()
  const [tags, setTags] = useState<Array<string>>([])
  const [inputTagValue, setInputTagValue] = useState<string>('')
  const [fetchedTags, setFetchedTags] = useState<any>([])

  useEffect(() => {
    const fetchTags = async (searchParam: string) => {
      try {
        const res = await axios({
          method: 'get',
          url: `https://dummyjson.com/posts/search?q=${searchParam}`,
        })

        setFetchedTags(res.data.posts)
      } catch (error) {
        //
      }
    }

    fetchTags(inputTagValue)
  }, [inputTagValue, tags])

  const form = useForm<UserFinalSetup>({
    resolver: zodResolver(userFinalSetup),
    mode: 'onChange',
  })

  const { ref: formRef, onChange } = form.register('avatar')

  const handleAddAndRemoveTag = (val: string) => {
    if (tags.indexOf(val) === -1) {
      setTags([...tags, val])
    } else {
      setTags(tags.filter((t) => t !== val))
    }
  }

  const handleFileUpload = () => {
    inputFileRef?.current?.click()
  }

  const {
    mutateAsync: userFinalSetupMutate,
    isLoading: isUserFinalSetupLoading,
  } = useUserFinalSetup()

  const handleOnSubmitForm = async (rawData: UserFinalSetup) => {
    const data = {
      avatar: rawData.avatar[0],
      username: rawData.username,
      tags: tags ? tags : [],
    }

    try {
      await userFinalSetupMutate(data)
    } catch (e: any) {
      console.log(e.body)
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleOnSubmitForm)}
        encType='multipart/form-data'
        className='space-y-3'
      >
        <div>
          <FormField
            name='username'
            control={form.control}
            defaultValue=''
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage>{fieldState.error?.message}</FormMessage>
              </FormItem>
            )}
          />
        </div>

        <div className='flex gap-3 mt-3'>
          <div className='overflow-hidden w-[150px] border rounded-lg aspect-square bg-gradient-to-r from-cyan-500 to-blue-500'>
            {imgFile && (
              <img
                src={URL.createObjectURL(imgFile)}
                className='w-full h-full object-cover'
              />
            )}
          </div>

          <div className='flex flex-col'>
            <h6 className='font-medium'>Profile Picture</h6>

            <input
              {...form.register('avatar')}
              type='file'
              name='avatar'
              ref={(e) => {
                formRef(e)
                inputFileRef.current = e
              }}
              onChange={(e) => {
                onChange(e)
                setImgFile(
                  e.target.files?.[0] !== undefined
                    ? e.target.files?.[0]
                    : imgFile
                )
              }}
              className='hidden'
            />

            <span>{form.formState.errors.avatar?.message as string}</span>

            <div className='w-max mt-auto'>
              <Button
                type='button'
                variant={'outline'}
                onClick={handleFileUpload}
              >
                Pick a photo
              </Button>
            </div>
          </div>
        </div>

        <div>
          <h5>Agricultural tags that interest you : </h5>

          <div className='relative'>
            <TagsInput
              onChange={() => {
                console.log('awd')
              }}
              value={tags}
              // addKeys={[]}
              renderTag={({ tag, getTagDisplayValue }) => (
                <button
                  key={tag + Math.random()}
                  className='border m-0.5 border-primary-3/80 bg-primary-1/40 rounded-sm w-max px-1 py-1'
                  onClick={() => {
                    setTags([...tags.filter((val) => val !== tag)])
                  }}
                >
                  <div className='flex gap-1 items-center'>
                    <span>{getTagDisplayValue(tag)}</span>

                    <div className='text-primary-2'>
                      <AiOutlineCloseCircle />
                    </div>
                  </div>
                </button>
              )}
              renderLayout={(tagsElement) => (
                <div className='flex flex-col'>
                  {tagsElement}
                  <Input onChange={(e) => setInputTagValue(e.target.value)} />
                </div>
              )}
            />

            <div className='rounded-xl border border-gray-500 w-full mt-2 min-h-[55px] py-1 px-4 focus:outline-primary-500 focus:shadow-md'>
              {/* <TagsInput
                {...form.register("tags")}
                value={tags}
                preventSubmit={true}
                onlyUnique
                onChange={() => {}}
                inputTagValue={inputTagValue}
                addOnBlur
                onChangeInput={(value: string) => {
                  setInputTagValue(value);
                }}
                renderInput={({ addTag, ...props }) => (
                  <input
                    key={"input"}
                    type="text"
                    style={{ outline: 0, height: 40, fontSize: 14 }}
                    placeholder=""
                    onKeyDownCapture={e => {
                      if (e.key === "Backspace" && inputTagValue === "") {
                        tags.pop();
                      }
                    }}
                    {...props}
                  />
                )}
                renderTag={({ tag, getTagDisplayValue }) => (
                  <button
                    key={tag + Math.random()}
                    className="border m-0.5 border-primary-3/80 bg-primary-1/40 rounded-sm w-max px-1 py-1"
                    onClick={() => {
                      setTags([...tags.filter(val => val !== tag)]);
                    }}
                  >
                    <div className="flex gap-1 items-center">
                      <span>{getTagDisplayValue(tag)}</span>

                      <div className="text-primary-2">
                        <AiOutlineCloseCircle />
                      </div>
                    </div>
                  </button>
                )}
              /> */}

              <div
                className={`${
                  fetchedTags.length > 0 && inputTagValue ? 'grid' : 'hidden'
                } grid-cols-3 gap-y-5 justify-evenly absolute left-0 z-20 w-full min-h-[50px] max-h-[400px] overflow-y-scroll rounded-lg bg-gray-50 border p-1`}
              >
                {fetchedTags.length > 0 &&
                  fetchedTags.map((item: any, index: any) => (
                    <button
                      key={`${item}${index}`}
                      className={`${
                        tags.indexOf(item.title) !== -1 ? 'bg-primary-500' : ''
                      } flex flex-col gap-3 text-start col-span-1 h-full hover:bg-gray-300/30 hover:cursor-pointer p-2 rounded-md`}
                      onClick={() => {
                        setTags([...tags, item.title])
                        handleAddAndRemoveTag(item.title)
                      }}
                      type='button'
                    >
                      <h6 className='text-primary line-clamp-2'>
                        {item.title}
                      </h6>
                      <div className='line-clamp-5'>
                        <span>{item.body}</span>
                      </div>
                    </button>
                  ))}

                {!fetchedTags && (
                  <div className='col-span-3 flex items-center justify-center'>
                    <LoadingSpinner />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* <Button
          $title="Continue"
          $size="lg"
          $fullWidth
          $isLoading={isUserFinalSetupLoading}
          $disabled={isUserFinalSetupLoading}
          className="mt-10"
        /> */}
        </div>
      </form>
    </Form>
  )
}

export default UserFinalSetupForm
