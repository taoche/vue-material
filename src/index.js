import Avatar from './avatar/avatar'
import Buttons from './buttons/buttons'
import Crad from './crad/crad'
import Checkbox from './checkbox/checkbox'
import DetePicker from './detePicker/detePicker'
import Dialog from './dialog/dialog'
import Input from './input/input'
import Menu from './menu/menu'
import Pagination from './pagination/pagination'
import Radio from './radio/radio'
import Search from './search/search'
import Select from './select/select'
import Slider from './slider/slider'
import Snackbar from './snackbar/snackbar'
import Switch from './switch/switch'
import Tables from './tables/tables'
import Tabs from './tabs/tabs'
import Toolbar from './toolbar/toolbar'
import Tooltips from './tooltips/tooltips'

export const components = {
  Avatar,
  Buttons,
  Crad,
  Checkbox,
  DetePicker,
  Dialog,
  Input,
  Menu,
  Pagination,
  Radio,
  Search,
  Select,
  Slider,
  Snackbar,
  Switch,
  Tables,
  Tabs,
  Toolbar,
  Tooltips
}

export default {
  install (Vue) {
    Object.keys(components).forEach((name) => {
      Vue.component(name, components[name])
    })
  }
}
