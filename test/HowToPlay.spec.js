import { shallow } from 'vue-test-utils'
import HowToPlay from '@/views/HowToPlay.vue'

describe('HowToPlay.vue', () => {

  it('should contain h1 title', () => {    
    const wrapper = shallow(HowToPlay)    
    const title = wrapper.find('h1')
    expect(title.text()).toContain('How To Play')
  })

})
