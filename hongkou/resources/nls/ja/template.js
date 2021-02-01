define({
  "viewer": {
    "loading": {
      "step1": "ストーリーの読み込み",
      "step2": "データを読み込んでいます",
      "step3": "ツアーを初期化しています",
      "loadBuilder": "ビルダ モードへの切り替え",
      "redirectSignIn": "サイン イン ページへのリダイレクト",
      "redirectSignIn2": "(サイン イン後にここにリダイレクトされます)",
      "fail": "マップ ツアーの読み込みに失敗しました",
      "failButton": "再試行"
    },
    "errors": {
      "boxTitle": "エラーが発生しました",
      "portalSelf": "致命的なエラー: ポータルの構成情報を取得できませんでした",
      "invalidConfig": "致命的なエラー: 無効な構成",
      "invalidConfigOwner": "致命的なエラー: 無効な構成 (権限のある所有者が必要です)",
      "invalidConfigNoWebmap": "致命的なエラー: 無効な構成 (index.html で Web マップまたはアプリケーション ID が指定されていません)",
      "invalidConfigNoAppDev": "Web マッピング アプリケーション ID または webmap が URL パラメーター (?appid= or ?webmap=) で指定されていません。開発モードでは、index.html の appid および webmap の構成は無視されます。",
      "createMap": "マップを作成できません",
      "invalidApp": "致命的なエラー: ストーリーを読み込めません",
      "noLayer": "Web マップにマップ ツアーの有効なデータ レイヤが含まれていません。",
      "noLayerMobile": "この表示サイズでは、マップ ツアー ビルダーはサポートされません。可能な場合、ブラウザーのサイズを変更してビルダーにアクセスするか、さらに大きい画面を持つデバイス上でストーリーを構築してください。",
      "noLayerMobile2": "使用しているデバイスを横方向に回転してマップ ツアー ビルダーを使用してください。",
      "noLayerView": "マップ ツアー Web アプリケーションへようこそ。<br />このストーリーは、まだ構成されていません。",
      "appSave": "ストーリーの保存中にエラーが発生しました",
      "mapSave": "Web マップの保存中にエラーが発生しました",
      "featureServiceLoad": "フィーチャ サービスの読み込み中にエラーが発生しました",
      "notAuthorized": "このストーリーにアクセスする権限が与えられていません。",
      "notAuthorizedBuilder": "マップ ツアー ビルダーを使用する権限がありません。",
      "oldBrowserTitle": "完全にサポートされていないブラウザです",
      "noBuilderIE8": "マップ ツアー ビルダは、バージョン 9 より前の Internet Explorer ではサポートされていません。",
      "ie10Win7Explain": "データ ソースがアタッチメントを含むフィーチャ サービスである場合、マップ ツアー対話型ビルダは、Windows 7 の Internet Explorer 10 ではサポートされていません。アタッチメントを含むフィーチャ サービスを使用するには、<a target='_blank' href='http://msdn.microsoft.com/en-us/library/ie/hh920756(v=vs.85).aspx'>ドキュメント モードを手動で強制的に Internet Explorer 9 標準にするか</a>、<a target='_blank' href='http://news.softpedia.com/news/How-to-Remove-IE10-and-Get-Back-to-IE9-on-Windows-7-308998.shtml'>Internet Explore 9 にダウングレードするか</a>、Windows 8 にアップグレードする必要があります。",
      "oldBrowserExplain": "このブラウザは、マップ ツアーにアップロードした画像からサムネイルを自動生成する機能をサポートしていません。このブラウザを使用してマップ ツアーを作成できますが、アップロードした画像に対してサムネイル画像を個別に指定する必要があります。",
      "oldBrowserExplain2": "操作性を改善するには、<a href='http://browsehappy.com/' target='_blank'>ブラウザをアップグレードするか</a>、<a href='http://www.google.com/chromeframe/?redirect=true' target='_blank'>Internet Explorer 向けの Google Chrome Frame を有効化してください</a>。",
      "oldBrowserExplain3": "マップ ツアー ビルダは、Windows XP の Internet Explorer 10 では動作しません。",
      "oldBrowserClose": "閉じる",
      "noViewerIE2": "このストーリーをサポートされていない古いブラウザーで表示しようとしています。動作しない機能やその他の予期しない問題がある可能性があります。Internet Explorer 11 にアップグレードするか、Chrome などの別のブラウザーを使用することをお勧めします。",
      "noViewerIE3": "2017 年後半には、このストーリーはこのブラウザーで読み込めなくなります。その時点で、サポートされているブラウザーを使用してこのストーリーを表示する必要があります。",
      "attention": "注意"
    },
    "mobileHTML": {
      "showIntro": "タイトルの表示",
      "hideIntro": "タイトルの非表示",
      "navList": "リスト",
      "navMap": "マップ",
      "navInfo": "メディア",
      "introStartBtn": "開始"
    },
    "desktopHTML": {
      "storymapsText": "ストーリー マップ",
      "builderButton": "ビルダ モードに切り替え",
      "facebookTooltip": "Facebook で共有",
      "twitterTooltip": "Twitter で共有",
      "bitlyTooltip": "ショート リンクを取得",
      "bitlyStartIndex": "現在の場所へのリンク",
      "tooltipAutoplayDisabled": "これは、自動再生モードでは使用できません",
      "autoplayLabel": "自動再生モード",
      "autoplayExplain1": "自動再生モードでは、ストーリーが一定の間隔で進みます。このモードは、売店や公共の表示モニターでは理想的ですが、その他の状況では、ストーリーを読むのを難しくする場合があることに注意してください。この機能は、小さいディスプレイではサポートされません。",
      "autoplayExplain2": "このモードがアクティブの場合、ストーリーの再生/一時停止および再生速度の調整を行うコントロールが表示されます。",
      "takeTourText": "ツアーの実行",
      "backToStart": "開始に戻る"
    },
    "builderHTML": {
      "panelHeader": "ストーリーの構成",
      "buttonSave": "保存",
      "buttonSettings": "設定",
      "buttonShare": "共有",
      "buttonView": "ビュー モード",
      "buttonItem": "Web アプリケーション アイテムを開く",
      "buttonHelp": "ヘルプ",
      "buttonOrganize": "整理",
      "buttonOrganizeAndCover": "ツアー ポイントの整理とカバー ページの追加",
      "buttonAdd": "追加",
      "buttonImport": "インポート",
      "buttonImportDisabled": "画像をアップロードする際にインポートは利用できません。 画像をアップロードするには、[追加] をクリックしてください。",
      "dataEditionDisabled": "この CSV データ ソースでデータの編集が無効化されています",
      "dataSourceWarning": "マップ ツアー データ レイヤーが変更されました。 フィーチャ ID が同じでない場合は、<b>[整理]</b> を使用して、順序をリセットし、ポイントを非表示にする必要があります。 フィールド名が異なる場合は、<b>[設定] のデータ タブ</b>でフィールド設定をリセットする必要があります。",
      "organizeWarning": "対話型ビルダの外部で追加された 1 つまたは複数のポイントは非表示になっています。",
      "dataPicError0a": "このツアーには、<b>%NB%</b> 非対応の写真 URL が含まれています。",
      "dataPicError0b": "このツアーには、<b>%NB%</b> 非対応の写真 URL が含まれている可能性があります。",
      "dataPicError1": "マップ ツアーの場合、写真 URL は .jp(e)g、.png、.gif、または .bmp のいずれかの拡張子で終わる必要があります。",
      "dataPicError2": "この要件は、公開された既存のマップ ツアーには適用されません。ただし、対話型ビルダを使用するには、最初に、次の 2 つのアクションのいずれかを実行して、 この URL の問題を解決する必要があります。",
      "dataPicError3": "URL の編集",
      "dataPicError4": "このアクションでは、サポートされていない写真 URL の末尾に <i>#isImage</i> を追加します。 ほとんどのサーバーでは URL の文字列追加がサポートされていますが、 このアクションを実行した後は、ポイント間を移動することで、更新した写真 URL が正常に機能することを確認する必要があります。 それぞれの写真が読み込まれた場合は、マップ ツアーを保存できます。 <b>写真のリンクが切れている場合は、マップ ツアーを保存しないでください。</b> 代わりに、ビルダーを再び読み込んで、2 番目のアクションを実行してください。",
      "dataPicError5": "ツアーを写真に制限",
      "dataPicError6": "このオプションでは、すべての URL が画像と見なされますが、対話型のビルダーを使用してビデオを追加することはできません。 このアクションは、その後ビデオを追加したいときに元に戻すことができます。",
      "dataPicError7": "マップ ツアーは写真に限定されています。ビデオは使用できません。 この制限を解除するよう選択した場合は、マップ ツアーを保存する前に、写真が正常に読み込まれていることを確認してください。 必要に応じて、この制限を元に戻すことができます。",
      "dataPicError8": "写真制限の解除",
      "dataPicError9": "これらの URL がビデオをポイントしている場合は、この警告を無視できます。URL が画像をポイントしている場合は、次の 2 つのアクションのいずれかを実行する必要があります。",
      "modalCancel": "キャンセル",
      "modalApply": "適用",
      "organizeHeader": "ツアーの整理",
      "organizeGeneralCaption": "ツアー ポイントを並べ替えるにはドラッグ アンド ドロップを使用します",
      "organizeDelete": "削除",
      "organizeHide": "非表示",
      "organizeReset": "順序および非表示ポイントをリセット",
      "addMaxPointReached": "アイコン セットで許容されているポイントの最大数に達したため、別のツアー ポイントを追加できません。<br /><br />既存のポイントを削除した場合、ストーリーを再度読み込む必要があります。",
      "addMaxPointReachedMobile": "許容されているポイントの最大数に達したため、その写真を追加できません。",
      "addClose": "閉じる",
      "addHeader": "新しいツアー ポイントの追加",
      "addTabPicture": "メディア",
      "addTabInformation": "情報",
      "addTabLocation": "位置",
      "addSelectCaption": "写真の選択または削除",
      "addNoteVideo": "ビデオを使用する手順については、ヘルプをご参照ください。",
      "addSelectCaptionNoFileReader": "写真の選択",
      "addChangePhoto": "写真とサムネイルの変更",
      "addPictureResolutionIntro": "写真の解像度が高すぎます:",
      "addPictureResolutionOldBrowser": "写真の解像度が高すぎます。%RECOMMENDED_RES% より低い解像度を指定して、マップ ツアーの表示を最適化してください。",
      "addPictureResolutionResize": "写真の解像度を %RESOLUTION% に変更",
      "addPictureResolutionKeep": "元の解像度である %RESOLUTION% を維持",
      "addSelectThumbnail": "サムネイルの選択",
      "addNoThumbSelected": "サムネイルが選択されていません",
      "addThumbSelected": "選択済み",
      "addCameraSettingsHeader": "カメラ設定",
      "addThumbnailHeader": "サムネイル",
      "addLabelPicUrl": "写真",
      "addLabelThumbUrl": "サムネイル",
      "addTextPlaceholderUrl": "イメージの URL の入力",
      "addTextPlaceholderUrl2": "YouTube ページの URL の入力",
      "addTextPlaceholderUrl3": "Vimeo ページの URL の入力",
      "addTextPlaceholderUrl4": "ビデオ埋め込み URL の入力",
      "addLabelVideo": "ビデオ",
      "addMediaVideoOther": "その他",
      "addMediaVideoHelp": "URL をチェックして、デフォルトのサムネイルを取得",
      "addMediaVideoHelpTooltip1": "チェックに成功しました",
      "addMediaVideoHelpTooltip2": "チェックに失敗しました",
      "addMediaVideoHelpTooltip4": "ビデオを埋め込むオプションを見つけ、表示されているビデオの URL をコードにコピー",
      "addLabelName": "名前",
      "addLabelDescription": "キャプション",
      "addTextPlaceholder": "ここに入力します",
      "addLocatePlaceholder": "住所または位置を検索します",
      "addPinColor": "色",
      "addLatitude": "緯度",
      "addLongitude": "経度",
      "addLatitudePlaceholder": "例: 34.056",
      "addLongitudePlaceholder": "例: -117.195",
      "addUploading": "ツアー ポイントをアップロードしています",
      "addSave": "ツアー ポイントの追加",
      "addMobileUploading": "写真をアップロードしています",
      "addMobileName": "名前を入力",
      "addMobileNameMandatory": "エラーです。名前を入力してください。",
      "addMobileError": "不具合が発生しました",
      "settingsHeader": "設定",
      "settingsTabLayout": "レイアウト",
      "settingsTabColor": "色",
      "settingsTabLogo": "ヘッダー",
      "settingsTabFields": "データ",
      "settingsTabExtent": "範囲",
      "settingsTabZoom": "ズーム レベル",
      "settingsLayoutExplain": "適切なレイアウトを選択します。",
      "settingsLayoutProfessional": "3 パネル",
      "settingsLayoutModern": "統合レイアウト",
      "settingsLayoutSidePanel": "サイド パネル",
      "settingsLayoutSelected": "選択したレイアウト",
      "settingsLayoutNew": "新機能",
      "settingsLayoutSelect": "選択",
      "settingsLayoutNote": "ビデオを使用するポイントでは、キャプションは、そのオプションがオフの場合でも常に、ビデオの下に配置されるので、注意してください。",
      "settingsLayoutLocBtn": "[検索] ボタンを表示します",
      "settingsLayoutLocBtnHelp": "ほとんどのブラウザーでサポートされています。HTTPS を介してストーリー マップにアクセスした場合にのみ表示されます。ストーリーが埋め込まれている場合は表示されません。",
      "settingsColorExplain": "外観を変更するには、定義済みのテーマを選択するか、独自のテーマを作成します。",
      "settingsLabelColor": "ヘッダー、コンテンツおよびフッターの色",
      "settingsLogoExplain": "ヘッダー ロゴをカスタマイズします (最大 250 x 50 ピクセル)。",
      "settingsLogoEsri": "Esri ロゴ",
      "settingsLogoNone": "ロゴなし",
      "settingsLogoCustom": "カスタム ロゴ",
      "settingsLogoCustomPlaceholder": "画像の URL",
      "settingsLogoCustomTargetPlaceholder": "クリックスルー リンク",
      "settingsLogoSocialExplain": "ヘッダー右上にあるリンクのカスタマイズ",
      "settingsLogoSocialText": "テキスト",
      "settingsLogoSocialLink": "リンク",
      "settingsLogoSocialDisabled": "この機能は、管理者によって無効にされています",
      "settingsDataFieldsExplain": "写真の名前、キャプションおよび色の各フィールドを選択します。",
      "settingsDataFieldsError": "アプリケーションが適切な名前、キャプション、または色データを判断できません。ここで使用されるフィールドを選択してください。これらの設定は後で変更できます。",
      "settingsFieldsLabelName": "名前",
      "settingsFieldsLabelDescription": "キャプション",
      "settingsFieldsLabelColor": "色",
      "settingsFieldsReset": "フィールド選択のリセット",
      "settingsExtentExplain": "以下の対話型マップを使用して、マップ ツアーのホーム範囲を設定します。",
      "settingsExtentExplainBottom": "定義する範囲により、マップのホーム範囲が変更されます。 最初のツアー ポイントが含まれない場合、この範囲は使用されませんので注意してください。 その場合、ツアーは最初のポイントを中心に開きます。",
      "settingsExtentDateLineError": "この範囲は、経度 180°の子午線を超えることはできません。",
      "settingsExtentDateLineError2": "範囲を計算中にエラーが発生しました",
      "settingsExtentDrawBtn": "新しい範囲の描画",
      "settingsExtentModifyBtn": "範囲の編集",
      "settingsExtentApplyBtn": "マップ ツアーでのプレビュー",
      "settingsExtentUseMainMap": "マップ ツアー範囲の使用",
      "settingsZoomExplain": "ストーリー ポイントのズームを設定します (オプション)。",
      "settingsLabelZoom": "縮尺/レベル",
      "settingsZoomFirstValue": "なし",
      "settingsFieldError": "各リスト内のフィールドを選択してください",
      "dataTitle": "ホストされたマップ ツアー レイヤーの作成",
      "dataExplain": "画像およびツアー ポイントのための新しいフィーチャ レイヤーが作成されます。ツアー レイヤーは、マップ ツアーを共有しない限り、どのユーザーとも共有されません。",
      "dataExplainPortal": "フィーチャ レイヤーが正常に作成されない場合は、ArcGIS 管理者にお問い合わせください。",
      "dataNameLbl": "レイヤー名",
      "dataFolderListLbl": "フォルダ",
      "dataFolderListFetching": "フォルダを取得しています...",
      "dataRootFolder": "ルート",
      "dataNameError": "フィーチャ サービスの名前を入力してください",
      "dataFolderError": "有効なフォルダの選択",
      "dataSrcContainsInvalidChar": "フィーチャ サービス名に無効な文字 (-、＜、>、#、%、:、\"、?、&、+、/、) が 1 つ以上含まれています。",
      "dataSrvAlreadyExistsError": "その名前のサービスは組織サイト内にすでに存在します。別の名前を選択してください。",
      "dataBtnSave": "レイヤーの作成",
      "dataFooterProgress": "作成が進行中です",
      "dataFooterSucceed": "作成に成功しました。読み込んでいます。",
      "dataFooterError": "作成に失敗しました。もう一度やり直してください。",
      "tabError": "すべてのタブでエラーを確認してください",
      "introRecordBtn": "概要",
      "introRecordActivate": "最初のポイントを概要として使用します (カルーセルには表示されません)",
      "coverRecordActivate": "カバー ページとして最初のポイントを使用",
      "coverBuilder": "カバー ページの構成",
      "cover": "カバー",
      "showCover": "カバーの表示",
      "editCover": "カバーの編集",
      "coverNoVideo": "カバー メディアとしてビデオはサポートされていません。画像を選択してください。",
      "coverPreview": "カバーを表示するには、ストーリーを保存した後、[ストーリーの表示] ボタンを使用してプレビューします。",
      "thirdPartyTerms": "サードパーティのサービスを使用することによって、そのサービスの利用条件に同意します。 "
    },
    "addPopupJS": {
      "uploadingPicture": "写真をアップロードしています",
      "uploadSuccess": "アップロードに成功しました",
      "uploadError": "写真のアップロード中にエラーが発生しました",
      "uploadError2": "フィーチャの追加中にエラーが発生しました (無効な html タグ)",
      "notJpg": "アップロードする JPEG の写真を選択してください",
      "errorNoPhoto": "アップロードする画像を選択",
      "errorNoThumbnail": "アップロードするサムネイルを選択",
      "errorInvalidPicUrl": "正しい写真 URL を入力してください。 先頭に HTTPS を付けます。 末尾は jpg、png、gif、または bmp にするか、URL の末尾に '#isImage' を付けてそのルールを上書きします。",
      "errorInvalidThumbUrl": "このツアー ポイントの有効なサムネイル URL (https:// で始まり、jpg、png、gif、または bmp で終わる) を入力してください。",
      "errorInvalidVideoUrl": "有効なビデオの URL の入力 (https:// で始まる)",
      "errorNoName": "このツアー ポイントの名前を入力してください",
      "errorNoDescription": "このツアー ポイントのキャプションを入力してください",
      "errorNoLocation": "このツアー ポイントの位置を設定"
    },
    "builderJS": {
      "noPendingChange": "保留中の変更はありません",
      "unSavedChangeSingular": "1 つの保存されていない変更",
      "unSavedChangePlural": "複数の保存されていない変更",
      "shareStatus1": "ツアーが保存されていません",
      "shareStatus2": "ツアーがパブリックに共有されています",
      "shareStatus3": "ツアーが組織サイト内で共有されています",
      "shareStatus4": "ツアーが共有されていません",
      "popoverDiscard": "保存されていない変更を破棄しますか？",
      "yes": "はい",
      "no": "いいえ",
      "popoverLoseSave": "ビューアを開くと、保存されていない変更は失われます",
      "ok": "OK",
      "popoverSaveWhenDone": "完了したら必ず保存してください",
      "closeWithPendingChange": "アクションを確定しますか？ 変更は失われます。",
      "gotIt": "OK",
      "savingApplication": "ストーリーを保存しています",
      "saveSuccess": "ストーリーが保存されました",
      "saveError": "保存に失敗しました。もう一度やり直してください。",
      "saveError2": "名前または説明に無効な html タグがあるため保存に失敗しました",
      "saveError3": "タイトルは必ず入力してください",
      "dragColorPicker": "移動するか<br />色を変更します",
      "dataWarningExtent": "Web マップの表示範囲外にデータがあります。これらのデータはツアー ポイントとして使用されません。使用するには、マップ表示範囲を変更します。",
      "dataWarningVisibi": "現在の Web マップの範囲では、マップ ツアー レイヤは表示されません。%MAPSIZE% のマップでマップ ツアー レイヤが表示されることを確認してください。",
      "dataWarningEdit": "Web マップの編集",
      "dataWarningClose": "閉じる",
      "signIn": "アカウントでサイン インして",
      "signInTwo": "ストーリーを保存してください。",
      "switchBM": "ベースマップの変更"
    },
    "organizePopupJS": {
      "messageStart": "次のレコードを削除しようとしています。",
      "messageSinglePoint": "1 つのツアー ポイント",
      "messageMultiPoint": "複数のツアー ポイント",
      "messagePermantRemove": "これにより、データベースから",
      "messageRecord": "レコードが",
      "messageRecordPlural": "レコードが",
      "messageConfirm": "永久に削除されます。続行しますか？",
      "labelButtonShow": "表示",
      "labelButtonHide": "非表示"
    },
    "picturePanelJS": {
      "popoverDeleteWarningPicAndThumb": "これにより、写真およびサムネイルが完全に削除されます。",
      "popoverDeleteWarningThumb": "これにより、サムネイルが完全に削除されます。",
      "popoverUploadingPhoto": "写真とサムネイルをアップロードしています",
      "popoverUploadingThumbnail": "サムネイルをアップロードしています",
      "popoverUploadSuccessful": "アップロードに成功しました",
      "popoverUploadError": "アップロードに失敗しました。もう一度やり直してください。",
      "changePicAndThumb": "写真の変更",
      "changeThumb": "サムネイルの変更",
      "selectPic": "メディアの変更",
      "selectThumb": "サムネイルの変更",
      "uploadPicAndThumb": "適用"
    },
    "headerJS": {
      "editMe": "編集",
      "templateTitle": "タイトルの設定",
      "templateSubtitle": "サブタイトルの設定",
      "edit": "編集"
    },
    "crossFaderJS": {
      "setPicture": "写真のタイトルの設定",
      "setCaption": "写真のキャプションの設定"
    },
    "importPopup": {
      "title": "インポート",
      "prevBtn": "戻る",
      "nextBtn": "次へ"
    },
    "importPopupHome": {
      "header": "写真の保存場所"
    },
    "onlinePhotoSharingCommon": {
      "pictures": "写真",
      "videos": "ビデオ",
      "disabled": "この機能は、管理者によって無効にされています",
      "disabledPortal": "この機能を使用するには、ポータルにホスティング サーバーが存在する必要があります。Portal for ArcGIS 管理者に問い合わせてください。",
      "header1": "写真はパブリックに共有する必要があります。",
      "header2": "インポートは最初の %NB1% %MEDIA% に制限されます。",
      "emptyDataset": "写真が見つかりませんでした",
      "footerImport": "インポート",
      "selectAlbum": "パブリック アルバムの選択",
      "selectAlbum2": "アルバムの選択",
      "pleaseChoose": "選択してください",
      "userLookup": "検索",
      "userLookingup": "検索",
      "csv": "CSV で参照",
      "advanced": "高度な設定",
      "advancedScratchLbl": "新しいツアーの開始",
      "advancedScratchTip": "ツアー ポイントを追加できるよう空のツアーを作成します。メディアがオンライン上にある必要があります。このオプションでは、画像のアップロードはサポートされていません。",
      "advancedCSVLbl": "CSV ファイルからツアー データをインポート",
      "advancedCSVTip": "オンラインでメディアを参照する CSV ファイルからツアー コンテンツをインポートします。このオプションでは、画像のアップロードはサポートされていません。",
      "advancedCommonTip": "画像とビデオがオンライン上にすでに存在する必要があります。",
      "select": "選択",
      "locUse": "写真のジオロケーションを使用",
      "locExplain": "写真の場所はすべての写真が同じ場所にあるとアルバムから継承できるので、個々の写真の場所を使用するのはおすすめしません。",
      "locExplain2": "ビデオの場所はすべてのビデオが同じ場所にあるとユーザー設定から継承できるので、個々のビデオの場所を使用するのはおすすめしません。"
    },
    "viewFlickr": {
      "title": "Flickr のインポート",
      "header": "Flickr のユーザー名を入力し、インポートするアルバムまたはタグを選択します。",
      "userInputLbl": "ユーザ名の入力",
      "signInMsg2": "ユーザが見つかりません",
      "selectSet": "アルバムの選択",
      "selectTag": "またはタグを選択",
      "footerImportTag": "選択したタグのインポート",
      "footerImportSet": "選択したアルバムのインポート"
    },
    "viewFacebook": {
      "title": "Facebook のインポート",
      "header": "Facebook ユーザ アカウントで認証するか、公開ページを使用します。プライベート アルバムを使用して、Facebook のユーザ認証を必要としない公開マップ ツアーを作成できます。この公開マップ ツアーでは、コメントと「いいね！」をプライベートのままにしておくことができます。",
      "leftHeader": "Facebook ユーザ",
      "rightHeader": "Facebook ページ",
      "pageExplain": "Facebook ページは、<b>esrigis</b> などの、公開されたブランド/製品または著名人です。ページ URL 内の最初の「/」以降から、ページ名を取得できます。",
      "pageInputLbl": "ページ名の入力",
      "lookupMsgError": "ページが見つかりません"
    },
    "viewPicasa": {
      "title": "Google+ のインポート",
      "header": "電子メール アドレスまたは ID を入力します。",
      "userInputLbl": "電子メールまたは Picasa/Google+ ID",
      "signInMsg2": "アカウントが見つかりません",
      "signInMsg3": "パブリック アルバムがありません",
      "howToFind": "<a href='https://links.esri.com/storymaps/google-photos-help' target='_blank'>詳細</a>",
      "howToFind2": "任意の Picasa のページの 1 番目と 2 番目の「/」の間の数字をコピーします。"
    },
    "viewCSV": {
      "title": "CSV のインポート",
      "uploadBtn": "CSV ファイルの選択またはドロップ",
      "resultHeaderEmpty": "CSV が空です",
      "resultHeaderSuccess": "%NB_POINTS% ポイントが読み込まれました",
      "resultHasBeenLimited": "1 つのツアーにつき %VAL3% ポイントの制限を遵守するために、インポートは、%VAL2% のうちの最初の %VAL1% ポイントに制限されます",
      "browserSupport": "使用中のブラウザはサポートされていません。CSV を使用するには、<a href='http://browsehappy.com/' target='_blank'>ブラウザをアップグレードする</a>か、ArcGIS.com Web マップ ビューアを使用する必要があります (ヘルプを参照)。",
      "errorLatLng": "緯度フィールドと経度フィールドが見つかりませんでした。可能な緯度の値は <i>%LAT%</i>、経度の値は <i>%LONG%</i> です。",
      "errorFieldsExplain": "以下の必須フィールドが見つからないため、読み込みに失敗しました。",
      "errorFieldsName": "<b>名前</b>: 可能な値は %VAL%",
      "errorFieldsDesc": "<b>説明</b>: 可能な値は %VAL%",
      "errorFieldsUrl": "<b>写真 URL</b>: 可能な値は %VAL%",
      "errorFieldsThumb": "<b>サムネイル URL</b>: 可能な値は %VAL%",
      "errorFields2Explain": "以下の属性について、レイヤとは異なる属性が CSV で使用されているため、読み込みに失敗しました。",
      "errorFields2Name": "<b>名前</b>: %VAL2% ではなく %VAL1% を使用",
      "errorFields2Desc": "<b>説明</b>: %VAL2% ではなく %VAL1% を使用",
      "errorFields2Url": "<b>写真 URL</b>: %VAL2% ではなく %VAL1% を使用",
      "errorFields2Thumb": "<b>サムネイル URL</b>: %VAL2% ではなく %VAL1% を使用",
      "resultFieldsAll": "すべての属性がインポートされました",
      "resultFieldsNotAll": "以下の属性は、マップ レイヤーに存在しないため、インポートされませんでした",
      "resultFieldsNotAll2": "以下の属性がインポートされました",
      "footerNextBtnResult": "Web マップにインポート",
      "footerProgress": "インポートが進行中です",
      "footerSucceed": "インポートに成功しました。読み込んでいます"
    },
    "viewYoutube": {
      "title": "YouTube のインポート",
      "header": "YouTube のユーザ名を入力してパブリックに共有されているビデオを検索します。",
      "pageInputLbl": "YouTube のユーザ名の入力",
      "lookupMsgError": "ユーザが見つかりません",
      "howToFind": "YouTube のユーザ名の検索方法",
      "howToFind2": "ビデオの下にユーザ名が表示されます",
      "found": "見つかりました",
      "noData": "パブリックなビデオが見つかりませんでした"
    },
    "viewGeoTag": {
      "title": "画像/ビデオの選択と検索",
      "header": "場所アイテムをインポートします。 インポートする未配置のアイテムをクリックして特定します。",
      "headerMore": "ヘルプ",
      "headerExplain": "<b>[インポート]</b> ボタンをクリックすると、<b>[検索済み]</b> タブに表示されている画像またはビデオのみがインポートされます。<br><br>画像またはビデオとともに保存されているジオロケーション情報は、アクセス可能な場合、自動でインポートされます。 ジオロケーションのないアイテムはすべて <b>[検索する]</b> タブにリスト表示されます。 そのタブに表示されているアイテムを検索するには、アイテムをクリックし、マップ上の目的の位置をクリックします。<br><br><b>[検索済み]</b> タブからアイテムを削除してアイテムがインポートされないようにするには、そのアイテムにカーソルを合わせたときに表示される [インポートしない] ボタンをクリックします。<br><br>ヒント: ご自身のメディアのジオロケーション情報がインポートされない場合は、アカウントのプライバシー設定を確認してください。 Flickr アカウントの設定の場合、EXIF データが非表示でないことを確認します。 また、新しいアップロードのために EXIF データをインポートする Flickr プライバシー オプションがオフ (デフォルト) である場合、画像のジオロケーションは、もう一度アップロードするか、Flickr 内の場所を手動で指定しない限り、Flickr に保存されません。",
      "leftPanelTab1": "検索する",
      "leftPanelTab2": "検索済み",
      "clickOrTap": "マップをクリックして検索する",
      "clearLoc": "場所の消去",
      "clickDrop": "インポートしない",
      "footerImport": "インポート",
      "footerProgress": "インポートが進行中です",
      "footerSucceed": "インポートに成功しました。読み込んでいます...",
      "loading": "読み込んでいます",
      "error": "写真のジオロケーションのインポートに失敗しました。ジオロケーションが無視されました。"
    },
    "initPopup": {
      "title": "マップ ツアー ビルダへようこそ",
      "prevBtn": "戻る",
      "nextBtn": "次へ"
    },
    "initPopupHome": {
      "header1": "写真またはビデオの場所",
      "header2": "このアシスタントを使用して、オンラインに保存されたメディアからマップ ツアーを構築したり、それらを ArcGIS Online 組織向けプランのアカウントにインポートしたりできます。",
      "title1": "メディアはすでにオンラインにあります",
      "title2": "画像をアップロードする必要があります",
      "hostedFSTooltip": "画像をアップロードして、ツアーに格納します (ビデオはサポートされていません)。",
      "hostedFsNA": "公開者であるか、ホスト フィーチャ レイヤーを公開する権限を持つ別のロールである必要があります。ArcGIS 管理者に連絡してください。",
      "hostedFsNA2": "ArcGIS Online サブスクリプションでのみ使用できます。<a href='%LINK%'>無料トライアルにサイン アップ</a>",
      "footer1": "完了したら、必ずアプリケーション アイテム ページを使用してマップ ツアーを利用者と共有してください。",
      "footer3": "CSV テンプレートのダウンロード",
      "footer4": "ダウンロードしない場合、\"名前を付けて保存\"",
      "footer4bis": "ダウンロードが開始しない場合は、右クリックして、[名前を付けて保存] を実行します。",
      "footer5": "詳細",
      "footerProgress": "作成が進行中です",
      "footerSucceed": "正常に作成されました。読み込んでいます..."
    },
    "helpPopup": {
      "title": "ヘルプ",
      "close": "閉じる",
      "tab1": {
        "title": "概要",
        "moreInfo": "詳細情報",
        "infoSites": "<a href='https://storymaps.arcgis.com/en/app-list/map-tour/' target='_blank'>Esri ストーリー マップ Web サイト</a>の<a href='https://storymaps.arcgis.com' target='_blank'>マップ ツアー セクション</a>をご覧ください。",
        "mtFAQ": "「<a href='https://storymaps.arcgis.com/en/faq/#category4' target='_blank'>マップ ツアー FAQ」をご参照ください。</a>",
        "myStories": "Web サイトの<a href='https://storymaps.arcgis.com/en/my-stories/' target='_blank'>マイ ストーリー</a>で、マップ ツアーを管理し、エラーがないかをチェックできます。",
        "div1": "マップ ツアー テンプレートは、説得力のある写真またはメディア エレメントが存在する地理情報を、伝えたいストーリーで表示するために設計されています。",
        "div2": "このテンプレートを使用して、魅力的な使いやすい Web アプリケーションを作成できます。そのWeb アプリケーションでは、番号の順序でマップ上に小規模な一連の場所が表示され、その順序で参照できます。このテンプレートは、スマートフォンやタブレットなど、任意のデバイス上の任意の Web ブラウザーで使用するように設計されています。<br /><br />",
        "div42": "他のユーザーが作成するマップ ツアーの例を表示するには、<a href='https://storymaps.arcgis.com/' target='_blank'>ストーリー マップ Web サイト</a>の<a href='https://links.esri.com/storymaps/map_tour_gallery' target='_blank'>ギャラリーにアクセス</a>します。<a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a> で Twitter もフォローできます。",
        "div5": "当社では、皆様からのフィードバックをお待ちしています。 <a href='https://links.esri.com/storymaps/forum' target='_blank'>Geonet のストーリー マップ フォーラムから、問題や必要な新機能についてのご意見をお寄せください。</a>"
      },
      "tab2": {
        "title": "データ",
        "div1": "マップ ツアーを作成する際に考慮する主な点は、写真の保存場所の選択です。マップ ツアーには、写真共有サービスや任意の Web サーバーに保存された写真、またはディスクからアップロードする写真を使用できます。",
        "div1a": "サポートされている写真の形式とビデオの詳細については、このタブの最後のセクションをご参照ください。",
        "div2": "対話型ビルダでは、マップ ツアーで画像を処理するための次の 2 つのオプションが提供されます。",
        "div3": "<ul><li>Flickr や Google+ の画像、独自の Web サーバーに保存された画像など、</b>すでにオンラインに存在する写真</b>を使用できます。 それらの画像は、URL を使用してマップ ツアーで参照されます。</li><li><b>写真をコンピューターから直接マップ ツアーにアップロードする</b>こともできます。 このアップロードのオプションを使用するには、ArcGIS サブスクリプションを所有し、公開者権限または管理者権限を持っている必要があります。これは、ホスト フィーチャ サービスが自動的に作成され、写真が添付ファイルとしてそのフィーチャ サービスに保存されるためです。</li></ul>",
        "div4": "主なユース ケースは次のとおりです。",
        "div4b": "<b>写真がまだホストされず</b>、ArcGIS サブスクリプションを保有している: 最良の選択は、ホスト フィーチャ サービスを使用することです。公開写真共有サービスのように、写真が最適化され、高速な読み込み画像が作成されます。ArcGIS プラットフォームのすべての管理機能およびデータ管理機能にアクセスできます。",
        "div5": "<b>組織サイトのメンバーではない</b>: まず、写真共有 Web サイトまたは独自の Web サーバに写真をアップロードする必要があります。ビルダを介してそれらの写真を使用します。それらの写真は、元の場所で引き続きホストされます。",
        "div6": "写真をアタッチメントとして保存しているか、外部の写真を参照している<b>既存のフィーチャ サービスを再利用しようとしている</b>: 詳細は、下のセクションを参照してください。",
        "div7": "マップ ツアー テンプレートの<b>以前のバージョンを使用しており</b>、写真とサムネイルを参照する CSV がすでに存在する: その CSV をインポートしてデータを改善できます。ビルダは、緯度/経度フィールドを使用する CSV のみをサポートします。アドレスベース CSV は、Web マップを使用して引き続き使用できます (下のセクションを参照)。",
        "div8": "オンライン写真共有サービスからインポートする",
        "div9a": "Facebook のサポートは中止されました。${learn}。",
        "learn": "詳細",
        "div9": "インポート操作は、Web マップ フィーチャ コレクションに URL を格納することによって、すでにホストされた写真を参照します。写真は ArcGIS Online に保存されません。ホスト中の写真にアクセスできない場合、それらの写真はマップ ツアーで使用できなくなり、「写真を使用できません」という画像が表示されます。写真の名前、説明、および場所がマップ ツアーにインポートされるかどうかは、サービス プロバイダによって異なります。 これらの属性は Web マップに保存され、オンライン サービスに対するどのような編集も、マップ ツアーには反映されません。",
        "div10": "Web サーバへの写真の保存",
        "div11": "(Flickr や Google+ の画像にアクセスしたり、ツアーに直接アップロードするのではなく) 独自の Web サーバーで写真をホストすることを選択した場合、写真のサムネイルを手動で作成する必要があります。 サムネイルにフル解像度の写真を使用すると、パフォーマンスが低下します。 URL 経由で直接 Web 上でアクセスする場合の画像のサイズ設定については、こちらの「<a href='https://links.esri.com/storymaps/faq_maptour_image_size' target='_blank'>FAQ</a>」をご参照ください。",
        "div12": "既存の GIS データの使用",
        "div13": "アプリケーションに必要なフィールド セットがあれば、フィーチャ サービス、CSV ファイル、またはポイントを含むシェープファイルをマップ ツアー データソースとして使用できます。これをレイヤーとして ArcGIS Web マップに追加してから、マップ ツアーを作成してマップを共有する必要があります。",
        "div14": "フィールド名に使用できる値は次のとおりです (大文字と小文字は区別されません)。",
        "div151": "名前",
        "div152": "説明",
        "div153": "写真",
        "div154": "サムネイル",
        "div155": "色 ",
        "div16": "フィーチャ サービスを使用しているときに、一致するフィールドをアプリケーションが検出できない場合、ビルダで使用されるフィールドを構成するまで、ビューアは動作しません。Web マップに追加される CSV とシェープファイル レイヤには、必須フィールドがすべて存在している必要があります。必須フィールドが存在しない場合、ビルダは動作しません。",
        "div162": "写真がアタッチメントとして格納されているフィーチャ サービスを使用している場合は、<b>2 つのアタッチメントを含むフィーチャのみが使用されます</b>。最初のアタッチメントはメインのピクチャを定義し、2 番目のアタッチメントはサムネイルを定義します。",
        "div17": "アタッチメントを含まないフィーチャ サービスの場合、[写真] フィールドと [サムネイル] フィールドは必須です。アタッチメントを含むフィーチャ サービスの場合、これらのフィールドはオプションですが、強く推奨されます。サービスでアタッチメントを有効にしている場合、ビルダを使用して写真をアタッチメントとしてアップロードできます。サービスでアタッチメントを有効にしていない場合は、写真 URL とサムネイル URL を編集することのみが可能です。",
        "div172": "[写真] フィールドと [サムネイル] フィールドは、存在する場合、常に使用され、フィーチャ サービスのアタッチメントは検索されません。",
        "div173": "CSV とシェープファイルの例は次からダウンロード可能",
        "div174": "既存の GIS データを使用する際の詳細については、こちらの「<a href='https://links.esri.com/storymaps/faq_map_tour_gis_data' target='_blank'>FAQ</a>」をご参照ください。",
        "div18": "CVS またはシェープファイルからのホスト フィーチャ サービスの作成",
        "div19": "ホスト フィーチャ サービスを CSV またはシェープファイルから作成した場合、デフォルトではアタッチメントは有効化されません。これを有効化するには、フィーチャ サービスの詳細ページを開きます。そのページの [レイヤ] セクションで小さい矢印をクリックすると、そのオプションが表示されます。マップ ツアーは、属性を介して参照していた写真とサムネイルを引き続き使用します。必要に応じて、写真をフィーチャ サービスのアタッチメントとしてアップロードする場合、[写真] パネル上の 2 つのボタン (\"写真の変更\" と \"サムネイルの変更l\") を使用してそれを実行できます。",
        "div20": "サポートされている写真の形式とビデオ",
        "div21": "Flickr または Google+ の画像にアクセスすると、マップ ツアーは *.jpg ファイルとしてこれらの画像に自動でアクセスします。 マップ ツアー ビルダーに画像をアップロードする場合、画像の形式は *.jpg または *.jpeg である必要があります。 URL 経由で直接 Web 上で画像を参照する場合、サポートされる写真の形式は、*.jpg、*.jpeg、*.png、*.gif、および *.bmp です。 YouTube ビデオは直接サポートされます。",
        "div22": "マップ ツアー テンプレートにはビデオ プレイヤが含まれていないため、お気に入りのビデオ ホスト サービスで提供される外部ビデオ プレイヤを使用する必要があります (ビデオを埋め込むオプションを見つけ、表示されている URL を指定のコードにコピーします)。ビデオを自分でホストしたい場合は、<a href='http://www.videojs.com/'>Video.js</a> のように、ビデオ プレイヤを含む HTML ページを作成できます。",
        "div23": "対話型ビルダでは、アタッチメントを含むフィーチャ サービスを使用しているときに、ビデオを埋め込むためのダイアログ ボックスが表示されません。しかし、対話型ビルダの外部でデータを編集して、これを行うことができます。arcgis.com マップ ビューアで、外部ビデオをポイントするよう [写真] フィールドを変更し、特別なパラメータ  (#isVideo)  を URL の末尾に追加すると、メディアはビデオと見なされます。",
        "div24": "ただし、2 つの有効な写真のアタッチメントが存在している必要があります。存在していない場合、そのポイントは使用されません。[写真] フィールドと [サムネイル] フィールドが存在しないフィーチャ サービスのアタッチメントを使用している場合、ビデオは使用できません。"
      },
      "tab3": {
        "title": "カスタマイズ",
        "div1": "ビルダは、上部パネルの [設定] ボタンで使用できる複数のカスタマイズ オプションを備えています。必要なオプションが見つからない場合、Web サーバに配置し、必要に応じて拡張できるダウンロード可能なバージョンも提供されています。",
        "div2": "次の場合を除き、ホストされたバージョンを使用することを推奨します。",
        "div3": "<li>ヘッダーの背景画像の使用など、必要な UI のカスタマイズが提供されていない場合</li><li>開発者がアプリケーションの拡張を行う場合</li>",
        "div4": "ダウンロード可能なバージョンは、Web マップまたは Web マッピング アプリケーション ID を使用して構成できます。主に次のような場合に使用します。",
        "div41": "ホストされた環境で対話型ビルダを使用してマップ ツアーを構築し、Web マッピング アプリケーション ID によってテンプレートを構成する場合。対話型ビルダによって定義した設定が適用されます。",
        "div42": "対話型ビルダの外部で Web マップを構築し、Web マップ ID によってテンプレートを構成する場合。テンプレートの構成方法についてのドキュメントを参照する必要があります。",
        "div43": "対話型ビルダは、ダウンロード可能なバージョンで入手できますが、バージョン 10 より前の Internet Explorer など、ブラウザに関するいくつかの技術的制約があるので、ご注意ください。",
        "div5": "最新バージョンのテンプレートのダウンロード方法やその使用法の詳細については、<a href='https://github.com/Esri/map-tour-storytelling-template-js' target='_blank'>GitHub プロジェクト ページ</a>をご覧ください。"
      },
      "tab4": {
        "title": "ヒント",
        "div0": "サポートされているブラウザ",
        "div0a": "マップ ツアー ビューアは IE8+ でサポートされています。対話型ビルダは IE9+ でサポートされています。Esri はすべての主要ブラウザでビルダのテストを推進していますが、問題点が見つかった場合は、Chrome の使用をお勧めします。",
        "div0b": "問題点が見つかった場合は、Esri にご連絡ください。また、CSV テンプレートを使用してマップを構築すると、ビルダのインタフェースとの対話処理が最小になります。",
        "div1": "イメージ",
        "div2": "サイズ、形状、方向の異なる画像を 1 つのマップ ツアーで使用することはできますが、縦向きではなく横向きの画像の使用をお勧めします。 横縦比が 4:3 の画像が最適です。 3 パネルおよび統合レイアウトでは、キャプションが画像と重なるため、縦向き画像を使用すると、多くの画像がキャプションに隠されてしまう可能性があります。 3 パネルおよび統合レイアウトでは、可能な限り、すべての画像に同じサイズと形状を使用することをお勧めします。 こうすることで、ユーザーがツアー中に、サイズの異なる画像に混乱させられることがありません。",
        "div2a": "メインの写真の最大画像サイズは横 1,000 ピクセル x 縦 750 ピクセル、サムネイルは 140 x 93 の画像の推奨します。",
        "div3": "HTML タグを使用したキャプション テキストのフォーマット",
        "div4": "キャプションに HTML タグを入力して、書式設定とリンクを定義できます。たとえば、次のタグにより、緑のハイパーリンクが追加されます。",
        "div4aa": "<b>サイド パネル ツアーのカバー ページの作成</b><br>サイド パネル レイアウトは、オプションのカバー ページをサポートしているため、すぐれた外観の全画面画像により、ユーザーを惹き付けることができます。 サイド パネル ツアーのカバー ページを構成するには、最初にツアー ポイントの一部またはすべてをツアーに追加します。 [整理] ボタンをクリックします。表示されたダイアログで、カバー ページの定義に使用するツアー ポイントがツアー内の最初のポイントであることを確認します。 次に、そのダイアログの [カバー ページとして最初のポイントを使用] ボックスをクリックします。 最初のツアー ポイントの名前はカバー ページに表示されるタイトルになり、そのポイントのキャプションはサブタイトルになり、そのポイントの画像はカバー ページ画像として使用されます。 カバー ページではビデオはサポートされません。 詳細については、こちらの「<a href='https://links.esri.com/storymaps/faq_map_tour_cover_page_sp' target='_blank'>FAQ</a>」をご参照ください。</a>",
        "div4a": "ツアーに適切なサブタイトルの入力",
        "div4b": "ツアーに説得力のあるサブタイトルを指定します。 サブタイトルは、ツアーに対するユーザーの関心を引き、ツアーの内容を知らせる重要なものです。 また、ユーザーにツアーの位置 (州、国など) を知らせる重要な場所でもあります。 ユーザーがツアーの位置する都市や町を知っていることを前提にしないでください。 ただし、サブタイトルは長過ぎてはいけません。 最適なサブタイトルが思いつかない場合は、空欄にしておきます。 サイド パネル レイアウトでは、3 パネルおよび統合レイアウトと異なり、ヘッダーのサブタイトルはサポートされません。 サイド パネル レイアウトのカバー ページ オプションを使用する場合、ツアーの最初のポイントのキャプションがカバー ページに表示され、ツアーのサブタイトルになります。",
        "div5": "レイヤのサポート",
        "div6": "その他のサポート レイヤーを追加して、マップ ツアーにコンテキストを提供できます。 このようなレイヤーには、マップ ツアー ポイント以外にマップに表示したい地理フィーチャが含まれます (分析範囲、ツアーポイントにリンクする徒歩ルートや運転ルートなど)。 マップ ツアー テンプレートには、Web マップに指定したシンボルを使用して、これらの追加サポート レイヤーが表示されますが、レイヤーに定義されたポップアップはサポートされません。  ツアーにサポート レイヤーを追加するには、作業内容を保存し、マップ ツアー ビルダーを閉じます。 次に、ツアーで使用される Web マップを開きます。 これは、ArcGIS の [マイ コンテンツ] またはストーリー マップ Web サイトの [マイ ストーリー] セクションにあります。",
        "div7": "ツアーを短く魅力的に",
        "div8": "1 つのツアーにつき 99 ポイントまでという制限があります。当然、ほとんどのマップ ツアーは、この制限よりも大幅に短くなります。利用者はあまり多くのポイントを移動したがりません。自分では主題が魅力的だと思っていても、利用者もそう思うと考えてはいけません。",
        "div10": "埋め込みモード",
        "div11": "iframe を使用してテンプレートを別の Web サイトに埋め込む場合は、オプションのパラメーター \"&embed\" を URL の末尾に追加すると、ヘッダーが削除されます。",
        "div12": "iFrame 幅を小さくすると、マップ ツアーが応答性の高い小さい表示ビューに切り替わるため、小さい幅の使用は避けてください。このビューは、モバイル デバイスのツアーで使用されるのと同じビューです。 使いやすさを向上させるために、マップ ツアーを埋め込むときに、ユーザーがツアーを全画面で起動できるよう、埋め込んだツアーの横にリンクを提供することをお勧めしています。"
      },
      "tab5": {
        "title": "公開",
        "div1": "完了したら、[共有] ボタンまたは ArcGIS Online のアプリケーション アイテム ページを使用して、必ずマップ ツアーを利用者と共有してください。",
        "div2a": "ビルダを使用したツアーの共有",
        "div2b": "[共有] ボタンを使用すると、アプリケーションと Web マップのアイテムが更新されます。ツアーのデータがフィーチャ サービスのアイテムに保存されている場合、そのアイテムも更新されます。ArcGIS.com マップ ビューアを使用してその他のレイヤを追加した場合、それらのレイヤは更新されません。このため、ツアーが想定通りに共有されない可能性があります。必要 (以上) の権限をすでに持っているアイテムは、更新されません。",
        "div2c": "ArcGIS Online を使用したツアーの共有",
        "div2d": "ArcGIS Online を使用してアプリケーションを共有するとき、同じ方法で共有されていない依存するリソース (Web マップ、フィーチャ サービス、デコレーション レイヤ) を更新するか、必要に応じて尋ねられます。マップ ツアーがパブリックである場合にリソースのうちのいずれかが利用者と共有されていないときは、ユーザは ArcGIS Online のログイン ページにリダイレクトされます。",
        "div3t": "フィーチャ サービスのセキュリティ",
        "div3a": "マップ ツアー ビルダによって作成された、ホスト フィーチャ サービスを使用している場合、アプリケーションはサービスのセキュリティを自動的に管理します。サービスをパブリックに共有している場合でも、編集権限を持つのはあなただけです。",
        "div3t2": "利用者とツアーを共有する前に",
        "div3": "ArcGIS.com アカウントでログインしていない状態で、ツアーが動作することを確認してください。使用する URL は、ログイン ページまたはビルダ モードにリダイレクトしてはなりません。",
        "div4": "iPad を横向きにしてマップ ツアーの表示を確認し、この一般的なデバイスで適切に表示されることを確認してみることをお勧めします。これにより、写真上のキャプション表示領域が大きすぎないか確認できます。また、サブタイトルの長さが適切で、クリップされないことも確認できます。",
        "div5a": "検索の推奨事項",
        "div5b": "利用者がマップ ツアーを ArcGIS Online で検索する場合、ツアーがある州の名前や、米国外の場合は国名、および 'public art'、'tourist guide'、'historic places' のような主題タグとともに、'story map' タグをマップ ツアーの (Web マップ アイテム ページではなく) アプリケーション アイテム ページに追加することをお勧めします。これらのタグは、Esri がギャラリーで提示したりソーシャル メディアで宣伝したりする新しいツアーの優れた例を見つけるのにも役立ちます。また、ツアーの小さなスクリーンショットやその写真の 1 つなど、見栄えの良いサムネイル グラフィックスをアプリケーション アイテム ページにアップロードすることもお勧めします。この写真は、マップ ツアーを ArcGIS Online ギャラリーに追加する場合に自動的に使用されます。"
      }
    },
    "share": {
      "firstSaveTitle": "ツアーが保存されました",
      "manageStory": "ストーリーの管理",
      "manageStoryA1": "ヒント: %LINK1% を使用して、ストーリーにエラーがないかチェックしたり、共有方法を変更したり、ソーシャル メディアの外観を改善したりできます。 マイ ストーリー %LINK2% の詳細。",
      "manageStoryA1V1": "マイ ストーリー",
      "manageStoryA1V2": "こちら",
      "shareTitle": "ツアーの共有",
      "sharePrivateHeader": "ツアーが共有されていません。共有しますか？",
      "sharePrivateBtn1": "パブリックに共有",
      "sharePrivateBtn2": "組織サイト内で共有",
      "sharePrivateProgress": "共有の実行中...",
      "sharePrivateErr": "共有に失敗しました。もう一度行ってください。",
      "sharePrivateOk": "共有を更新しました。読み込んでいます...",
      "sharePreviewAsUser": "プレビュー",
      "shareHeader1": "ツアーには<strong>一般ユーザがアクセス</strong>できます。",
      "shareHeader2": "ツアーには、組織サイトのメンバーがアクセスできます (ログインが必要)。",
      "shareLinkHeader": "ツアーの共有",
      "shareLinkOpen": "オープン",
      "shareA1": "<a href='%LINK1%' target='_blank'>アプリケーション アイテム ページ</a>で %SHAREIMG% を使用します。Web マップの共有も解除する場合は、<a href='%LINK2%' target='_blank'>Web マップ アイテム ページ</a>を使用します。",
      "shareWarning": "<a href='%LINK%' target='_blank'>Web マップ</a>の所有者でないため、%WITH% の共有は無効化されています。",
      "shareWarningWith1": "パブリック",
      "shareWarningWith2": "パブリックおよび組織",
      "viewStory": "ストーリーの表示"
    },
    "locator": {
      "error": "場所は利用できません"
    },
    "saveErrorSocial": {
      "title": "ソーシャル メディアでの共有の更新",
      "panel1": "ソーシャル メディアでのストーリーの外観が改善されていますが、ArcGIS Web アプリケーション アイテムのタイトルがストーリーのタイトルと同じではありません。",
      "panel1tooltip": "タイトル、サマリー、およびサムネイル画像を定義すると、ストーリーは次のように表示されます。",
      "panel2": "ソーシャル メディアで使用するタイトル:",
      "panel2q1": "ストーリーのタイトル (推奨)",
      "panel2q1tooltip": "このオプションを選択すると、アイテムのタイトルは、ストーリーのタイトルと一致するように変更され、ビルダーでの追加の変更が同期するようになります。",
      "panel2q2": "アイテムのタイトル",
      "panel3": "ソーシャル メディアでのストーリーの外観をさらに改善するには、${MYSTORIES} を使用してサマリーとサムネイル画像を追加します。",
      "panel4": "今後、ストーリーについて警告しない",
      "mystories": "マイ ストーリー",
      "btnSave": "保存"
    },
    "bannerNotification": {
      "learnMore": "詳細",
      "close": "閉じる",
      "dontShowAgain": "今後このメッセージを表示しない"
    },
    "httpsTransitionNotification": {
      "bannerMsg": "Web セキュリティとストーリー マップに関する重要なメッセージ",
      "s1h1": "Esri はストーリー マップのセキュリティ向上に努めています",
      "s1p1": "ストーリー マップは Web 上に存在しており、Web コミュニティが、より良いセキュリティを確立して実装しようと、常に努力しています。 インターネットを経由して送信されるコンテンツにセキュリティで保護された接続を提供する HTTPS は、Web コンテンツにアクセスすることが期待される方法として現れました。 最新のブラウザーは現在、HTTPS の代わりに HTTP が使用された場合、警告メッセージを表示します。 これが標準となったことから、ストーリー マップを作成および共有する場合には HTTPS リンクを使用すること、Web コンテンツを埋め込む場合またはストーリー マップ内の画像にリンクする場合には HTTPS URL のみを使用することが強く推奨されます。",
      "s1p2": "事実上、ストーリー マップおよびそのすべてのコンテンツ (画像、レイヤー、埋め込まれたアプリおよび Web サイトを含む) には、HTTP ではなく HTTPS で始まるリンクを使用してアクセスする必要があるということです。 これによって、ストーリーが安全であることをほとんどの Web ブラウザーが示すようになるため、ユーザーに最高の体験を提供します。",
      "s2h1": "必要な操作",
      "s2p1": "Esri は、ストーリー マップの作成者およびユーザーの HTTPS への移行を簡単にするように努めています。 ストーリー内の安全でないコンテンツ (HTTP) を検出するのに役立ち、それに対処する方法に関する推奨を提供するツールが、ストーリー マップ ビルダーおよびマイ ストーリーで使用できるようになりました。 安全でないコンテンツがあるかどうかストーリーをチェックし、できるだけ速やかに HTTPS に更新してください。",
      "action1": "閉じる",
      "action2": "ストーリーを今すぐ確認する",
      "action3": "詳細"
    },
    "embedBar": {
      "share": "共有",
      "fullScreen": "全画面表示",
      "enlarge": "拡大",
      "newTab": "新しいタブで開く",
      "tagline": "ストーリー マップ",
      "exitFullScreen": "全画面表示を終了"
    },
    "june2018SurveyMessage": {
      "bannerMsg": "ユーザーの皆様にお願いがあります。 これは今後のストーリー マップを形成するのに役立つものです。",
      "s1h1": "皆様のご意見を共有することで、今後のストーリー マップが形成されます。",
      "s1p1": "皆様のご意見が最も重要かつ唯一のフィードバック ソースとなり、ユーザーの状況を詳細に知ることがストーリー マップの改善につながります。 この 3 分ほどの調査にご参加いただけると幸いです。",
      "s2p1": "Esri ストーリー マップを今後ともよろしくお願いいたします。",
      "action1": "閉じる",
      "action2": "調査を実行"
    }
  }
});