import type { Prisma } from "@prisma/client"

// import prisma from "@/lib/db"
import { mockList } from "@/lib/mockList"

export default async function getNavLinks() {
  // const res = await prisma.category.findMany({
  //   orderBy: [
  //     {
  //       rank: "asc",
  //     },
  //   ],
  //   include: {
  //     links: {
  //       orderBy: {
  //         rank: "asc",
  //       },
  //       where: {
  //         public: true,
  //         status: 1,
  //       },
  //     },
  //   },
  // })
  // // console.log(res)
  // console.log(mockList)
  return mockList
}

export type CategoryWithLinks = Prisma.PromiseReturnType<typeof getNavLinks>
