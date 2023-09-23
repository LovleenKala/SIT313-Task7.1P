
import { faker } from '@faker-js/faker'
const staffList2 =[{
    key:3,
    avatar : faker.image.avatar(),
    name : faker.person.firstName(),
    position:faker.person.jobTitle(),
    Auther: "⭐" + (Math.random() * 5).toFixed(1) + " " + faker.person.lastName()

},
{
    key:4,
    avatar : faker.image.avatar(),
    name : faker.person.firstName(),
    position:faker.person.jobTitle(),
    Auther: "⭐" + (Math.random() * 5).toFixed(1) + " " + faker.person.lastName()
},
{
    key:5,
    avatar : faker.image.avatar(),
    name : faker.person.firstName(),
    position:faker.person.jobTitle(),
    Auther: "⭐" + (Math.random() * 5).toFixed(1) + " " + faker.person.lastName()
},



]
export default staffList2