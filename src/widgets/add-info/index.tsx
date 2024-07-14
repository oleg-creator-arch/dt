import './add-info.scss';
import { ReactComponent as IconBed } from '@/shared/img/bed.svg';
import { ReactComponent as IconInternet } from '@/shared/img/internet.svg';
import { ReactComponent as IconAirConditioner } from '@/shared/img/air-conditioner.svg';
import { ReactComponent as IconBalcony } from '@/shared/img/balcony.svg';
import { ReactComponent as IconSafe } from '@/shared/img/safe.svg';
import { ReactComponent as IconDishes } from '@/shared/img/dishes.svg';
import { ReactComponent as IconMicrowave } from '@/shared/img/microwave.svg';
import { ReactComponent as IconElevator } from '@/shared/img/elevator.svg';
import { ReactComponent as IconFridge } from '@/shared/img/fridge.svg';
import { ReactComponent as IconFurniture } from '@/shared/img/furniture.svg';
import { ReactComponent as IconParking } from '@/shared/img/parking.svg';
import { ReactComponent as IconSignaling } from '@/shared/img/signaling.svg';
import { ReactComponent as IconShop } from '@/shared/img/shop.svg';
import { ReactComponent as IconHotWater } from '@/shared/img/hot-water.svg';
import { ReactComponent as IconTV } from '@/shared/img/tv.svg';
import { ReactComponent as IconWashingMachine } from '@/shared/img/washing-machine.svg';
import { Typography } from '@/shared/ui';
import cn from 'classnames';

type addInfoData = {
  bed: boolean;
  internet: boolean;
  fridge: boolean;
  washingMachine: boolean;
  microwave: boolean;
  hotWater: boolean;
  safe: boolean;
  tv: boolean;
  conditioner: boolean;
  shopsNearby: boolean;
  dishes: boolean;
  elevator: boolean;
  balcony: boolean;
  signaling: boolean;
  furniture: boolean;
  parking: boolean;
};

interface IAddInfoProps {
  data: addInfoData;
}

const AddInfo: React.FC<IAddInfoProps> = ({ data }: IAddInfoProps) => {
  console.log(data.bed);
  return (
    <div className="add-info-widget">
      <div className={cn('add-info', { active: data.bed })}>
        <IconBed />
        <Typography type="text-md" isUnSelectable={true} className={cn({ active: data.bed })}>
          Кровать
        </Typography>
      </div>
      <div className={cn('add-info', { active: data.conditioner })}>
        <IconAirConditioner />
        <Typography
          type="text-md"
          isUnSelectable={true}
          className={cn({ active: data.conditioner })}
        >
          Кондиционер
        </Typography>
      </div>
      <div className={cn('add-info', { active: data.internet })}>
        <IconInternet />
        <Typography type="text-md" isUnSelectable={true} className={cn({ active: data.internet })}>
          Интернет
        </Typography>
      </div>
      <div className={cn('add-info', { active: data.shopsNearby })}>
        <IconShop />
        <Typography
          type="text-md"
          isUnSelectable={true}
          className={cn({ active: data.shopsNearby })}
        >
          Магазины рядом
        </Typography>
      </div>
      <div className={cn('add-info', { active: data.fridge })}>
        <IconFridge />
        <Typography type="text-md" isUnSelectable={true} className={cn({ active: data.fridge })}>
          Холодильник
        </Typography>
      </div>
      <div className={cn('add-info', { active: data.dishes })}>
        <IconDishes />
        <Typography type="text-md" isUnSelectable={true} className={cn({ active: data.dishes })}>
          Посуда
        </Typography>
      </div>
      <div className={cn('add-info', { active: data.washingMachine })}>
        <IconWashingMachine />
        <Typography
          type="text-md"
          isUnSelectable={true}
          className={cn({ active: data.washingMachine })}
        >
          Стиральная машина
        </Typography>
      </div>
      <div className={cn('add-info', { active: data.elevator })}>
        <IconElevator />
        <Typography type="text-md" isUnSelectable={true} className={cn({ active: data.elevator })}>
          Лифт
        </Typography>
      </div>
      <div className={cn('add-info', { active: data.microwave })}>
        <IconMicrowave />
        <Typography type="text-md" isUnSelectable={true} className={cn({ active: data.microwave })}>
          Микроволновка
        </Typography>
      </div>
      <div className={cn('add-info', { active: data.balcony })}>
        <IconBalcony />
        <Typography type="text-md" isUnSelectable={true} className={cn({ active: data.balcony })}>
          Балкон
        </Typography>
      </div>
      <div className={cn('add-info', { active: data.hotWater })}>
        <IconHotWater />
        <Typography type="text-md" isUnSelectable={true} className={cn({ active: data.hotWater })}>
          Горячая вода
        </Typography>
      </div>
      <div className={cn('add-info', { active: data.signaling })}>
        <IconSignaling />
        <Typography type="text-md" isUnSelectable={true} className={cn({ active: data.signaling })}>
          Сигнализация
        </Typography>
      </div>
      <div className={cn('add-info', { active: data.safe })}>
        <IconSafe />
        <Typography type="text-md" isUnSelectable={true} className={cn({ active: data.safe })}>
          Сейф
        </Typography>
      </div>
      <div className={cn('add-info', { active: data.furniture })}>
        <IconFurniture />
        <Typography type="text-md" isUnSelectable={true} className={cn({ active: data.furniture })}>
          Мебель
        </Typography>
      </div>
      <div className={cn('add-info', { active: data.tv })}>
        <IconTV />
        <Typography type="text-md" isUnSelectable={true} className={cn({ active: data.tv })}>
          Телевизор
        </Typography>
      </div>
      <div className={cn('add-info', { active: data.parking })}>
        <IconParking />
        <Typography type="text-md" isUnSelectable={true} className={cn({ active: data.parking })}>
          Парковка
        </Typography>
      </div>
    </div>
  );
};

export default AddInfo;
