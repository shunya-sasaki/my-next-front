import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { useFetchDirectoryExist } from '@/app/hooks/useFetchDirectoryExist';
import { useState } from 'react';
import { MessagePopup } from '@/app/components/MessagePopup';

/**
 * Config画面の表示
 * @returns Config画面表示のJSX要素
 */
export const ConfigView = () => {
  // CSSクラスの定義
  const buttonClass = [
    'bg-customgray2',
    'hover:bg-customred',
    'text-white',
    'ml-2',
    'px-2',
    'rounded-lg',
    'relative',
  ].join(' ');
  const viewClass = ['pl-4', 'pt-4'].join(' ');
  const directoryInputClass = [
    'pl-2',
    'ml-4',
    'text-black',
    'bg-slate-100',
    'rounded-lg',
    'border-2',
  ].join(' ');

  // 状態変数の定義 ----------------------------------------------------------------
  // I/O設定
  const [directoryPath, setDirectoryPath] = useState('');
  const [isHoverDirectoryPath, setIsHoverDirectoryPath] = useState(false);
  const {
    directoryExist,
    directoryLastModifiedTime,
    isLoading,
    onClickFetchDirectoryExist,
  } = useFetchDirectoryExist();
  // モデル設定
  const [maxTrainingEpoch, setMaxTrainingEpoch] = useState(100);
  const [trainStopEpoch, setTrainStopEpoch] = useState(10);

  return (
    <div className={viewClass}>
      <div className="flex pt-2">
        <div className="text-2xl font-bold">
          <FontAwesomeIcon icon={faGear} />
        </div>
        <div className="text-2xl font-bold pl-2">Config</div>
      </div>
      <section className="pl-2">
        <div className="flex pt-2">
          <div className="text-xl font-bold">
            <FontAwesomeIcon icon={faDatabase} />
          </div>
          <div className="text-xl font-bold pl-2">I/O設定</div>
        </div>
        <div className="flex pt-2">
          <div>データ保存ディレクトリ:</div>
          <input
            type="text"
            className={directoryInputClass}
            value={directoryPath}
            onChange={(e) => setDirectoryPath(e.target.value)}
          />
          <div className="flex items-center relative">
            <button
              className={buttonClass}
              onClick={() => onClickFetchDirectoryExist(directoryPath)}
              onMouseOver={() => setIsHoverDirectoryPath(true)}
              onMouseLeave={() => setIsHoverDirectoryPath(false)}
            >
              確認
            </button>
            <MessagePopup
              messages={[
                '学習データCSVファイルがあるディレクトリのパスを入力してください．',
                'ボタンをクリックするとディレクトリの存在確認を行います．',
              ]}
              isHover={isHoverDirectoryPath}
            />
          </div>
        </div>
        {isLoading
          ? '読み込み中...'
          : directoryExist
            ? `最終更新時刻: ${directoryLastModifiedTime}`
            : 'ディレクトリが存在しません'}
      </section>
      <section className="pl-2">
        <div className="flex pt-2">
          <div className="text-xl font-bold">
            <FontAwesomeIcon icon={faCode} />
          </div>
          <div className="text-xl font-bold pl-2">モデル設定</div>
        </div>
        <div className="flex pt-2">
          <div>最大学習エポック数:</div>
          <input
            type="number"
            className={directoryInputClass}
            value={maxTrainingEpoch}
            min={1}
            onChange={(e) => setMaxTrainingEpoch(parseInt(e.target.value))}
          />
        </div>
        <div className="flex pt-2">
          <div>学習終了判定連続エポック数:</div>
          <input
            type="number"
            className={directoryInputClass}
            value={trainStopEpoch}
            min={1}
            onChange={(e) => setTrainStopEpoch(parseInt(e.target.value))}
          />
        </div>
      </section>
    </div>
  );
};
