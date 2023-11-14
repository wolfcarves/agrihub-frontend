import * as zod from 'zod'

const MAX_IMAGE_FILE_SIZE = 1024 * 1024 * 3 // 3MB
const ALLOWED_IMAGE_FORMATS = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
]

export const AskQuestion = zod.object({
  title: zod
    .string()
    .min(3, 'Please enter at least 3 characters')
    .max(200, 'Title is too long'),

  question: zod
    .string()
    .min(5, 'Please enter at least 5 characters')
    .max(2000, 'Question is too long'),

  tags: zod
    .array(zod.string())
    .optional()
    .refine((tags) => tags === undefined || tags.length <= 5, {
      message: 'Up to 5 tags are allowed',
    }),

  imgsrc: zod
    .array(
      zod.object({
        file: zod
          .any()
          .refine(
            (file) =>
              file?.size === undefined
                ? true
                : file?.size <= MAX_IMAGE_FILE_SIZE,
            {
              message: 'Maximum image file size is 3MB',
            }
          )
          .refine(
            (file) => ALLOWED_IMAGE_FORMATS.includes(file?.type),
            'Only .jpg, .jpeg, .png, .webp formats are supported'
          ),
      })
    )
    .optional(),
})
