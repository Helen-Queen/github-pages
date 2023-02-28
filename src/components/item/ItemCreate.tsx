import { defineComponent, onMounted, PropType, ref } from 'vue';
import { MainLayout } from '../../layouts/MainLayout';
import { Button } from '../../shared/Button';
import { http } from '../../shared/Http';
import { Icon } from '../../shared/Icon';
import { Tabs, Tab } from '../../shared/Tabs';
import { useTags } from '../../shared/useTags';
import { InputPad } from './InputPad';
import s from './ItemCreate.module.scss';
import { Tags } from './Tags';
export const ItemCreate = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    const refKind = ref('支出')
    const refTagId = ref<number>()
    const refHappenAt = ref<string>(new Date().toISOString())
    const refAmount = ref<number>()
    const {tags:expensesTags,hasMore,fetchTags} = useTags((page) => {
      return http.get<Resources<Tag>>('/tags',{
            kind:'expenses',
            page: page + 1,
            _mock:'tagIndex'
          })
    })

    const {tags:incomeTags,hasMore:hasMore2,fetchTags:fetchTags2} = useTags((page) => {
      return http.get<Resources<Tag>>('/tags',{
            kind:'income',
            page: page + 1,
            _mock:'tagIndex'
          })
    })
    // const refPage = ref(0)
    // const refHasMore = ref(false)
    // const refExpensesTags = ref<Tag[]>([])
    // const fetchTags = async()=>{
    //   const response = await http.get<Resources<Tag>>('/tags',{
    //     kind:'expenses',
    //     page: refPage.value + 1,
    //     _mock:'tagIndex'
    //   })
    //   const {resources,pager} = response.data
    //   refExpensesTags.value.push(...resources)
    //   refHasMore.value = (pager.page - 1) * pager.per_page + resources.length < pager.count
    //   refPage.value += 1
    // }
    
    // onMounted(fetchTags)
    
    
    // onMounted(async() =>{
    //   const response = await http.get<{resources:Tag[]}>('/tags',{
    //     kind:'income',
    //     _mock:'tagIndex'
    //   })
    //   refIncomeTags.value = response.data.resources
    // })
    // const refIncomeTags = ref<Tag[]>([])
    return () => (
      <MainLayout class={s.layout}>{{
        title: () => '记一笔',
        icon: () => <Icon name="left" class={s.navIcon} />,
        default: () => <>
          <div class={s.wrapper}>
            <Tabs v-model:selected={refKind.value} class={s.tabs}>
              <Tab name="支出">
              <div>{refHappenAt.value}</div>
                <Tags kind="expenses" v-model:selected={refTagId.value}></Tags>
              </Tab>
              <Tab name="收入" >
              <Tags kind="income" v-model:selected={refTagId.value}></Tags>
              </Tab>
            </Tabs>
            
            <div class={s.inputPad_wrapper}>
              <InputPad  v-model:happenAt={refHappenAt.value} 
                        v-model:amount={refAmount.value}/>
            </div>
          </div>
        </>
      }}</MainLayout>
    )
  }
})