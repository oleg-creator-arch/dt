import './tags.scss';
import { ReactComponent as IconSquare } from '@/shared/img/square.svg';
import { ReactComponent as IconBedroom } from '@/shared/img/bedroom.svg';
import { ReactComponent as IconStairs } from '@/shared/img/stairs.svg';
import { Typography } from '@/shared/ui';

type VariantTags = 'IconSquare' | 'IconBedroom' | 'IconStairs';

interface ITagsProps {
  variant: VariantTags;
  data: string;
}

const Tags: React.FC<ITagsProps> = ({ variant, data }: ITagsProps) => {
  return (
    <div className="tags-widget">
      <div className="icon">
        {variant === 'IconSquare' ? (
          <IconSquare />
        ) : variant === 'IconBedroom' ? (
          <IconBedroom />
        ) : (
          <IconStairs />
        )}
      </div>
      <div className="data">
        <Typography type="text-md" isUnSelectable={true}>
          {data}
        </Typography>{' '}
        {variant === 'IconSquare' ? (
          <Typography type="text-md" isUnSelectable={true}>
            м<sup>2</sup>
          </Typography>
        ) : null}
      </div>
      <div className="name-tag">
        {variant === 'IconSquare' ? (
          <Typography type="text-md" isUnSelectable={true}>
            Площадь
          </Typography>
        ) : variant === 'IconBedroom' ? (
          <Typography type="text-md" isUnSelectable={true}>
            Комната
          </Typography>
        ) : (
          <Typography type="text-md" isUnSelectable={true}>
            Этаж
          </Typography>
        )}
      </div>
    </div>
  );
};

export default Tags;
